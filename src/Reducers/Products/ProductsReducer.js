export const productsreducerfn = (state, action) => {
    switch (action.type) {
      case "setproducts":
        return { ...state, products: action.payload };
      default:
        return state;
    }
};