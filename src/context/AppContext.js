import React, { createContext, useReducer } from "react";

export const AppContext = createContext([]);

function reducer(state, action) {
  switch (action.type) {
    case "SET_CONTENT":
      return { ...state, response: action.payload };
    case "CURRENT_POST":
      return { ...state, current_post: action.payload };
    case "CREATE_ROUTES":
      return { ...state, routes: action.payload };
    case "SET_JWT_TOKEN":
      return {
        ...state,
        isAuthenticated: true,
        user: { jwtToken: action.payload },
      };
    case "TOGGLE_DRAWER":
      return { ...state, toggleDrawer: !state.toggleDrawer };
    case "IS_ERROR":
      return {
        ...state,
        error: { isError: true, message: action.payload.message },
      };
    case "REMOVE_AUTHENTICATED":
      return { ...state, isAuthenticated: false };
    case "RESET_ERROR":
      return { ...state, error: { isError: false, message: "" } };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

const AppStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

const initialState = {
  isAuthenticated: true,
  isLoading: false,
  toggleDrawer: false,
  error: {
    isError: false,
    message: "",
  },
  user: {
    jwtToken: null,
  },
  response: [],
  routes: [],
  current_post: null,
};

export default AppStore;
