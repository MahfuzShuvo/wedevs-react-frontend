import axios from "../Helper/axios";
import { productConstants } from "./constants";

export const getAllProducts = (products) => {
    
    return async (dispatch) => {

        dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
        const res = await axios.get(`/products`, {
            ...products
        });

        if (res.status === 200) {
            const { products } = res.data;
            // localStorage.setItem('token', token);
            localStorage.setItem('products', JSON.stringify(products));
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: {
                    products
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: productConstants.GET_ALL_PRODUCTS_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                });
            }
        }
    }
}

export const deleteProductById = (payload) => {
    return async (dispatch) => {
        try {
            const id = payload.productId;
            // console.log(id);
            const res = await axios.delete(`products/${id}`, {
                data: { payload },
            });
            dispatch({ type: productConstants.DELETE_PRODUCT_REQUEST });
            if (res.status === 200) {
                dispatch({ type: productConstants.DELETE_PRODUCT_SUCCESS });
                dispatch(getAllProducts());
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.DELETE_PRODUCT_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
  };