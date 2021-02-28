import axios from "../Helper/axios";
import { userConstants } from "./constants";

export const signup = (user) => {
    
    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/register`, {
            ...user
        });

        if (res.status === 200) {
            // const { message } = res.data;
            const { token, user, message } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    token, user, message
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}