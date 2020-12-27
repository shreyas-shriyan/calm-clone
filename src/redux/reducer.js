import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    OAUTH_LOADING,
    OAUTH_SUCCESS,
    OAUTH_FAILURE,
    SET_ADDRESS,
    ADD_TO_CART,
    CLEAR_CART,
    DELETE_ITEM,
    SAVE_ORDER,
    LOGOUT
} from './actionTypes';

const user = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
    loginloading: false,
    loginError: '',
    username: "",
    password: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading: true
            };
        case LOGIN_SUCCESS: {
            localStorage.setItem(
                'user',
                JSON.stringify({
                    ...action.payload,
                    ...state,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email,
                    authToken: action.payload.authToken,
                    orders: action.payload.orders
                })
            );
            return {
                ...action.payload,
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                authToken: action.payload.authToken,
                orders: action.payload.orders,
                loginLoading: false,
                loginError: ''
            };
        }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.payload
            };

        case LOGOUT: {
            //resets localStorage and state
            localStorage.clear();
            return {
                firstName: '',
                lastName: '',
                email: '',
                address: {},
                orders: [],
                payments: {},
                cart: [],
                authToken: '',
                loginloading: false,
                loginError: '',
                registerloading: false,
                registerError: '',
                oauthError: '',
                oauthLoading: false
            };
        }
        default:
            return state;
    }
};

export default reducer;
