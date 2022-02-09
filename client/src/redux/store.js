import { createStore } from "redux";
import initState from "./state";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, initState)

export default store
