import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
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
  const initialPosition = {
    lat: 51.505,
    lng: -0.09,
  };

  const [address, setAddress] = useState<Place>({
    position: initialPosition,
  });

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
          center={address.position}
          zoom={13}
          scrollWheelZoom={false}
          key={address.position.lat}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>{address.label}</Popup>
          </Marker>
        </MapContainer>
      </LocationContent>
    </LocationContainer>
  );
};

export default Location;
