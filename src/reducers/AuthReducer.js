import { authConstants, userConstants } from "../actions/constants";

// const initState = null;
const initState = {
    token: null,
    user: {
        id: '',
        name: '',
        email: ''
    },
    authenticate: false,
    authenticating: false,
    register: false,
    loading: false,
    error: null,
    message: '',
    loading: false
};

const AuthReducer = (state = initState, action) => {
    console.log(action);
    switch(action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
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
                loading: false
            }
            break;

            
            case userConstants.USER_REGISTER_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case userConstants.USER_REGISTER_SUCCESS:
                state = {
                    ...state,
                    user: action.payload.user,
                    token: action.payload.token,
                    loading: false,
                    authenticate: true,
                    message: action.payload.message
                }
                break;
            case userConstants.USER_REGISTER_FAILURE:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
                break;
    }
    return state;
}

export default AuthReducer;