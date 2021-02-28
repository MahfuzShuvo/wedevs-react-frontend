import { userConstants } from "../actions/constants";

const initState = {
    error: null,
    user: {
        id: '',
        name: '',
        email: ''
    },
    isRegistered: false,
    message: '',
    loading: false
}

const UserReducer = (state = initState, action) => {
    console.log(action);
    switch(action.type) {
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
                loading: false,
                isRegistered: true,
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

export default UserReducer;