import axios from 'axios';
import {
  fetchBreedsSuccess,
  fetchBreedError,
} from './components/view_breeds/actions';

const actionCreatorBreeds = breed => dispatch => {
  return new Promise(() => {
    axios
      .get('https://dog.ceo/api/breed/' + breed + '/images')
      .then(response => {
        dispatch(fetchBreedsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchBreedError(error));
      });
  });
};

export default actionCreatorBreeds;
