export const productsreducerfn = (state, action) => {
    switch (action.type) {
      case "setproducts":
        return { ...state, products: action.payload };
      case "productLoading":
        return { ...state, isLoading: action.payload }
      default:
        return state;
    }
};