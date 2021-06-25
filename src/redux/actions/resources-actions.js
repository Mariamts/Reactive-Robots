import { fetchResources } from '../../services/resources';
import {
  GET_RESOURCES_ATTEMPT,
  GET_RESOURCES_SUCCESS,
  GET_RESOURCES_FAILURE,
} from '../action-types';

export const getResourcesRequestAction = () => ({
  type: GET_RESOURCES_ATTEMPT,
});

export const getResourcesSuccessAction = (payload) => ({
  type: GET_RESOURCES_SUCCESS,
  payload,
});

export const getResourcesFailureAction = (payload) => ({
  type: GET_RESOURCES_FAILURE,
  payload,
});

export const getResourcesActionAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(getResourcesRequestAction());
      const data = await fetchResources();
      dispatch(getResourcesSuccessAction(data));
    } catch (error) {
      dispatch(getResourcesFailureAction(error));
    }
  };
};
