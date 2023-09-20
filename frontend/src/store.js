import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



import { userReducer } from "./reducers/UserReducer";
  import{ cartReducer }from "./reducers/CartReducer"

  const reducer = combineReducers({ user: userReducer,
    cart:cartReducer

})

let initialState = {};


const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;



// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Defaults to local storage

// // Import your reducers (userReducer, cartReducer) here

// import { userReducer } from "./reducers/UserReducer";
// import{ cartReducer }from "./reducers/CartReducer"

// let initialState = {};

// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });

// // const persistConfig = {
// //   key: "root",
// //   storage, // This will use local storage by default
// // };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [thunk];

// const store = createStore(
//   persistedReducer, // Use the persisted reducer
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// const persistor = persistStore(store); // Create a persistor

// export { store, persistor };
