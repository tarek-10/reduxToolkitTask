import {createStore ,applyMiddleware} from "redux";
import {configureStore} from "@reduxjs/toolkit"
// import counterReducers from "./reducer/counterReducer";
import counterSlice from "./counterSlice";
// import reducer from "./reducer/counterReducer";
// import reduxThunk from "redux-thunk";
// const enhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(reducer ,enhancer(applyMiddleware(reduxThunk)));
const store = configureStore({

    reducer:{
        counter:counterSlice
    }
    
})
export default store;