import axios from 'axios';

const API_KEY =
  'live_8c6pn5exD7MB9obFr3gpVQfAVmf4bK5uZbksK5ZOFZCfy9EF2x3IN7ynkUMlVw5p';
axios.defaults.headers.common['x-api-key'] = API_KEY;

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(resp => resp)
    .catch(err => err);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(resp => resp)
    .catch(err => err);
}
