import * as actionType from '../action-types';

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_RESOURCES_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_RESOURCES_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case actionType.GET_RESOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default resourcesReducer;
