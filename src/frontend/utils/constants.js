const addressActionTypes = {
  DISPLAY_ADDRESSES: "DISPLAY_ADDRESSES",
  SHOW_ADDRESS_MODAL: "SHOW_ADDRESS_MODAL",
  SET_ADDRESS_DETAILS: "SET_ADDRESS_DETAILS",
  EDIT_ADDRESS_DETAILS: "EDIT_ADDRESS_DETAILS",
  ADD_NEW_ADDRESS: "ADD_NEW_ADDRESS",
  SET_DUMMY_ADDRESS: "SET_DUMMY_ADDRESS",
  REMOVE_ADDRESS: "REMOVE_ADDRESS",
  RESET_ADDRESS_FORM: "RESET_ADDRESS_FORM",
  ZIPCODE_ERROR: "ZIPCOD_ERROR",
  MOBILE_ERROR: "MOBILE_ERROE",
  SET_SELECTED_ADDRESS_ID: "SET_SELECTED_ADDRESS_ID",
};

const cartActionTypes = {
  DISPLAY_CART: "DISPLAY_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY_IN_CART: "UPDATE_QUANTITY_IN_CART",
};

const filterActionTypes = {
  DISPLAY_PRODUCTS: "DISPLAY_PRODUCTS",
  DISPLAY_CATEGORIES: "DISPLAY_CATEGORIES",
  SEARCH: "SEARCH",
  CATEGORY: "CATEGORY",
  SIZE: "SIZE",
  AVAILABILITY: "AVAILABILITY",
  SORT_BY_PRICE: "SORT_BY_PRICE",
  SORT_BY_RATING_RANGE: "SORT_BY_RATING_RANGE",
  CLEAR_FILTERS: "CLEAR_FILTERS",
  GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",
  SET_ORDER_LIST: "SET_ORDER_LIST",
  MAX_PRICE: "MAX_PRICE",
};

const wishlistActionTypes = {
  DISPLAY_WISHLIST: "DISPLAY_WISHLIST",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
};

export {
  addressActionTypes,
  cartActionTypes,
  filterActionTypes,
  wishlistActionTypes,
};
