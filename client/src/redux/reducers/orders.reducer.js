import { ADD_ORDER, GET_ORDERS } from "../types";

export default function ordersReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_ORDERS: {
      return payload
    } case ADD_ORDER: {
      return [...state, payload]
    } default: {
      return state
    }
  }
}
