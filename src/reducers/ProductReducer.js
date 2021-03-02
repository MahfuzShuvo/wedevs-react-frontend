import { productConstants } from "../actions/constants";

// const initState = null;
const initState = {
    token: null,
    products: {
        id: '',
        title: '',
        description: '',
        price: '',
        image: ''
    },
    error: null,
    message: '',
    loading: false
};

const ProductReducer = (state = initState, action) => {
    switch(action.type) {
        case productConstants.ADD_NEW_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                // products: action.payload.products,
                loading: false
            }
            break;
        case productConstants.ADD_NEW_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        
        case productConstants.UPDATE_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.UPDATE_PRODUCT_SUCCESS:
            state = {
                ...state,
                // products: action.payload.products,
                loading: false
            }
            break;
        case productConstants.UPDATE_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;

        case productConstants.GET_ALL_PRODUCTS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
                loading: false
            }
            break;
        case productConstants.GET_ALL_PRODUCTS_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;

        case productConstants.DELETE_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case productConstants.DELETE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case productConstants.DELETE_PRODUCT_FAILURE:
            state = {
                ...state,
                loading:false,
                error: action.payload.error
            }
            break;
    }
    return state;
}

export default ProductReducer;