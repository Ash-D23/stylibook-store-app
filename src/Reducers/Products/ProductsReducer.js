import { PRODUCTS_ACTIONS } from '../../Utilities'

export const productsreducerfn = (state, action) => {
    switch (action.type) {
      case PRODUCTS_ACTIONS.SET_PRODUCTS:
        return { ...state, products: action.payload };
      case PRODUCTS_ACTIONS.PRODUCT_LOADING:
        return { ...state, isLoading: action.payload }
      default:
        return state;
    }
};