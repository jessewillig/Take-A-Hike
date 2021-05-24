import React, { createContext, useReducer, useContext } from 'react';
import {
    LOGIN,
    LOGOUT,
    ERROR,
} from "./actions"

const HikeContext = createContext();
const { Provider } = HikeContext;

const reducer = (state, action) => {
    switch (action.type) {
        case ERROR:
            return {
                ...state,
            }
        case LOGIN:
            return {
                ...state,
                user: action.user
            }
        case LOGOUT:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}

const HikeProvider = ({ value = {}, ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        user: {},
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useHikeContext = () => {
    return useContext(HikeContext);
}

export { HikeProvider, useHikeContext }