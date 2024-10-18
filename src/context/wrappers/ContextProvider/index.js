"use client"
import React, { createContext, useReducer, useContext } from 'react';
import { actionsFn } from '@/context/actions';
import { apiReducer } from '@/context/reducers';
import { translate } from '@/context/actions/utils';
import { ACTIONS } from '@/context/types';

export const initialState = {
  data: null,
  loading: false,
  error: null,
  language: 'es'
};

export const ApiContext = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const actions = (type, data) => actionsFn(dispatch, type, data)

  const t = (key) => {
    return translate(state.language, key);
  };

  const setLang = (lang) => {
    dispatch({
      type: ACTIONS.SET_LANGUAGE,
      payload: lang
    })
  }

  return (
    <ApiContext.Provider value={{ state, actions, t, setLang }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  return useContext(ApiContext);
}
