import { authConstants } from "./userConstance";

const initState = {
    token: null,
    user: {
        id: '',
        email: '',
        type: '',
        honorific: '',
        fullName: '',
        username: '',
        profilePicture: '',
        mobile: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};

export default (state = initState, action) => {

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
                loading: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                loading: false
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                authenticating: false,
                loading: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
                authenticating: true,
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
                authenticating: false
            }
            break;
    }

    return state;
}