import { ADD_ORDER, GET_ORDERS } from "../types";

export const getOrdersAction = (orders) => ({
  type:GET_ORDERS,
  payload: orders
})

export const addNewOrderAction = (newOrder) => ({
  type: ADD_ORDER,
  payload: newOrder
})
