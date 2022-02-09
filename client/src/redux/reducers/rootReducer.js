import { combineReducers } from "redux";
import getOrders from "./orders.reducer";

const rootReducer = combineReducers({
  orders: getOrders
})

export default rootReducer
