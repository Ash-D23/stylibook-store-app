import { FILTER_ACTIONS } from '../../Utilities'

export const filterreducerfn = (state, action) => {
    switch (action.type) {
      case FILTER_ACTIONS.SORT:
        return { ...state, sort: action.payload };
      case FILTER_ACTIONS.SET_PRICE_RANGE:
        return { ...state, priceRange: action.payload };
      case FILTER_ACTIONS.RESET:
        return initialfilters
      case FILTER_ACTIONS.SET_RATINGS:
        return { ...state, ratings: action.payload }
      case FILTER_ACTIONS.SET_CATEGORY:
        return { ...state, category: {...state.category, [action.payload]: !state.category[action.payload]}}
      case FILTER_ACTIONS.SET_SEARCH:
        return { ...state, search: action.payload }
      case FILTER_ACTIONS.INITIALIZE_CATEGORY:
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