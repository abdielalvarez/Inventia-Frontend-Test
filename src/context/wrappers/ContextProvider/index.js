"use client"
import React, { createContext, useReducer, useContext } from 'react';
import { actionsFn } from '@/context/actions';
import { apiReducer } from '@/context/reducers';
import { translate } from '@/context/actions/utils';

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

  return (
    <ApiContext.Provider value={{ state, actions, t }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  return useContext(ApiContext);
}
