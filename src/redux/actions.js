import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './actionTypes';

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});


export const loginUser = (username) => (dispatch) => {
    dispatch(loginSuccess(username))
};

export const logout = () => ({
    type: LOGOUT,
    logout: 'logout'
});
