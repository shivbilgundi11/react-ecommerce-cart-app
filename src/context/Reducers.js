export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      break;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, category: action.payload };
    case "FILTER_BY_BRAND":
      return { ...state, brand: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "FILTER_BY_COLOR":
      return { ...state, color: action.payload };
    case "CLEAR_FILTER_CATEGORY":
      return { byCategory: 'all' };
    case "CLEAR_FILTER_PRICE":
      return { byPrice: 'all' };
    case "CLEAR_FILTER_COLOR":
      return { byColor: 'all' };
    case "CLEAR_FILTER_BRAND":
      return { byBrand: 'all' };
    default:
      return state;
  }
};
