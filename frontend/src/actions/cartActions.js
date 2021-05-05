import axios from 'axios'
import { CART_ADD_ITEM } from '../contants/cartConstants'

export const addToCart = (id, qty) => async (dispactch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatchEvent({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
