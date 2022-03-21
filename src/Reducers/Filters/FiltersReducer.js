export const filterreducerfn = (state, action) => {
    switch (action.type) {
      case "sort":
        return { ...state, sort: action.payload };
      case "setpriceRange":
        return { ...state, priceRange: action.payload };
      case "reset":
        return initialfilters
      case "setratings":
        return { ...state, ratings: action.payload }
      case "setcategory":
        return { ...state, category: {...state.category, [action.payload]: !state.category[action.payload]}}
      case "setsearch":
        return { ...state, search: action.payload }
      case "initializecategory":
        return { ...state, category: { ...state.category, ...action.payload}}
      default:
        return state;
    }
};

export const initialfilters = {
  sort: 'asc',
  category: {
    'all': true,
    'Fiction': false,
    'Non_Fiction': false,
    'Fantasy': false,
    'Academics': false
  },
  ratings: 'all',
  priceRange: '1000',
  search: ''
}