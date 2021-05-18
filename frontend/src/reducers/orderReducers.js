import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../contants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: false,
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: payload,
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
