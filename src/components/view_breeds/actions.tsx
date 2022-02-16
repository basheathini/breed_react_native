import ACTION_TYPES from '../../actionTypesBreeds';

export const fetchBreeds = () => ({
  type: ACTION_TYPES.API_PENDING,
  payload: [],
});

export const fetchBreedsSuccess = data => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const fetchBreedError = error => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});