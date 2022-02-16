import ACTION_TYPES from '../../actionTypesAllBreeds';

export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING,
  payload: [],
});

export const fetchSuccess = data => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const fetchError = error => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});
