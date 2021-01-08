import axios from 'axios';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

const mapboxAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
});

const getMapboxLocation = (local: string) => {
  return mapboxAPI.get(`${local}.json?access_token=${mapboxToken}`)
};

export default getMapboxLocation;
