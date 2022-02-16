import ACTION_TYPES from './../actionTypesAllBreeds';

const initialState = {
  data: '',
  error: '',
};

const reducer = (state = initialState, action) => {
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
export default reducer;
