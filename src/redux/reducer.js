import {
    LOGIN_SUCCESS,
    LOGOUT
} from './actionTypes';

const user = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
    username: user.username || "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            localStorage.setItem(
                'user',
                JSON.stringify({
                    ...state,
                    username: action.payload,
                })
            );
            return {
                ...state,
                username: action.payload,
            };
        }

        case LOGOUT: {
            //resets localStorage and state
            localStorage.clear();
            return {
                username: "",
            };
        }
        default:
            return state;
    }
};

export default reducer;
