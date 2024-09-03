import { ACTIONS } from '@/context/types';

export const actionsFn = async (dispatch, type, data) => {
  try {
    dispatch({ type, payload: data });
  } catch (error) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
  }
};