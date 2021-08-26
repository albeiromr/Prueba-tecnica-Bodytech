import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import appReducer from "./reducers/appReducer";

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;