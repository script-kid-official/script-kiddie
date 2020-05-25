import React, { createContext, useReducer } from 'react'

export const AppContext = createContext([]);

function reducer(state, action) {
    switch (action.type) {
        case 'SET_CONTENT':
            return { ...state, response: action.payload }
        case 'SET_JWT_TOKEN':
            return {
                ...state, isAuthenticated: true, user: { jwtToken: action.payload }
            }
        case 'TOGGLE_DRAWER':
            return { ...state, toggleDrawer: !state.toggleDrawer }
        case 'IS_LOADING':
            return { ...state, isLoading: action.payload }
        default: return state;
    }


}

const AppStore = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
    )
}

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    toggleDrawer: false,
    user: {
        jwtToken: null
    },
    response: []
}

export default AppStore
