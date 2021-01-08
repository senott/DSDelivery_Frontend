import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { usePosition } from 'use-position';

import OrderAddress from '../../dtos/OrderAddress';
import getMapboxLocation from '../../services/getMapboxLocation';

import {
  LocationContainer,
  LocationContent,
  LocationTitle,
  LocationSearchContainer,
} from './styles';

interface Place {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
}

interface LocationProps {
  onChangeLocation: (location: OrderAddress) => void;
}

const Location: React.FC<LocationProps> = ({ onChangeLocation }) => {
  const { latitude, longitude, errorMessage } = usePosition(false);

  const [address, setAddress] = useState<Place>({
    position: {
      lat: 51.505,
      lng: -0.09,
    },
  });

  useEffect(() => {
    if (latitude && longitude && !errorMessage) {
      setAddress({
        position: {
          lat: latitude,
          lng: longitude,
        },
      });
    }
  }, [latitude, longitude, errorMessage]);

  const loadOptions = async (
    inputValue: string,
    callback: (places: Place[]) => void,
  ) => {
    const response = await getMapboxLocation(inputValue);

    const places = response.data.features.map((item: any) => {
      return {
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0],
        },
      };
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!,
    });
  };

  return (
    <LocationContainer>
      <LocationContent>
        {(latitude && longitude && (
          <>
            <LocationTitle>
              Selecione onde o pedido deverá ser entregue:
            </LocationTitle>
            <LocationSearchContainer>
              <AsyncSelect
                placeholder="Digite o endereço para entrega"
                className="search"
                loadOptions={loadOptions}
                onChange={value => handleChangeSelect(value as Place)}
              />
            </LocationSearchContainer>
            <MapContainer
              center={address!.position}
              zoom={13}
              scrollWheelZoom={false}
              key={address?.position.lat}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={address!.position}>
                <Popup>{address?.label}</Popup>
              </Marker>
            </MapContainer>
          </>
        )) || (
          <>
            <LocationTitle>Obtendo sua localização.</LocationTitle>
            <LocationTitle>
              Caso o mapa não apreça, você deverá permitir que esse site utilize
              sua localização para realizar um pedido.
            </LocationTitle>
          </>
        )}
      </LocationContent>
    </LocationContainer>
  );
};

export default Location;
