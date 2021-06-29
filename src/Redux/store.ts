import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export type AppStoreType = typeof store;