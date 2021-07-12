import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});
export type RootState = ReturnType<typeof rootReducer>

let preloader;
const persistedAppState = localStorage.getItem('state');
persistedAppState && (preloader = JSON.parse(persistedAppState))


export const store = createStore(rootReducer, preloader);

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
    localStorage.setItem('count', store.getState().counter.count.toString())
})

export type AppStoreType = typeof store;