import {PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST,PRODUCT_LIST_FAIL} from '../contants/productContacts'

export const productListReducer = (state = { products: [] }, action) => {
  const { type, payload } = action

  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        products: [],
        loading: true,
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload,
      }
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
