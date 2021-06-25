import { fetchUsers } from '../../services/users';
import {
  GET_USERS_ATTEMPT,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../action-types';

export const getUsersRequestAction = () => ({
  type: GET_USERS_ATTEMPT,
});

export const getUsersSuccessAction = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailureAction = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});

export const getUsersActionAsync = (amount = 10) => {
  return async (dispatch) => {
    try {
      dispatch(getUsersRequestAction());
      const data = await fetchUsers();
      dispatch(getUsersSuccessAction(data));
    } catch (error) {
      dispatch(getUsersFailureAction(error));
    }
  };
};
