import ACTION_TYPES from './../actionTypesBreeds';

const initialState = {
  data: '',
  error: '',
};

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.API_PENDING:
      return {
        ...state,
      };
    case ACTION_TYPES.API_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION_TYPES.API_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default breedReducer;
