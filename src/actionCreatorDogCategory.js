import axios from 'axios';
import {fetchSuccess, fetchError} from './components/main_screen/actions';

const actionCreatorBreeds = url => dispatch => {
  return new Promise(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  });
};

export default actionCreatorBreeds;
