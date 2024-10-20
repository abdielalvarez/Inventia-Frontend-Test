"use client";
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { actionsFn } from '@/context/actions';
import { apiReducer } from '@/context/reducers';
import { translate } from '@/context/actions/utils';
import { ACTIONS } from '@/context/types';

export const initialState = {
  data: null,
  loading: false,
  error: null,
  language: 'es',
};

export const ApiContext = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      dispatch({ type: ACTIONS.RESTORE_STATE, payload: JSON.parse(savedState) });
    }
  }, []);

  const actions = (type, data) => actionsFn(dispatch, type, data);

  const t = (key) => translate(state.language, key);

  const setLang = (lang) => {
    dispatch({ type: ACTIONS.SET_LANGUAGE, payload: lang });
    localStorage.setItem('appState', JSON.stringify({ ...state, language: lang }));
  };

  return (
    <ApiContext.Provider value={{ state, actions, t, setLang }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  return useContext(ApiContext);
}
