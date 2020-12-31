import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import reducer from "./reducer/reducer";
import initial from "./initial";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState())
);

export default store;


// The Store: The store keeps track of the current state. We can subscribe to it
// to listen for changes and we can dispatch actions to it. We can’t change the
// state directly, only via the store.