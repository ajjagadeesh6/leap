import { authConstants } from "./userConstance";
import axios from "../../services/axios";

export const login = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        try {
            const res = await axios.post(`user/signin`, {
                ...user
            });

            if (res.status === 200) {
                let { user, token } = res.data
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token, user
                    }
                })
            }
        }
        catch (err) {
            const error = err.response.data.message
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: error.message }
            });
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        try {
            localStorage.clear();
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        } catch (error) {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error }
            });
        }
    }
}