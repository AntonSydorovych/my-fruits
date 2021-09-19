import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {itemReducer} from "./reducers/itemReducer";
import {mainPageReducer} from "./reducers/mainReducer";

const rootReducer = combineReducers({
        mainPageReducer,
        itemReducer
    }
);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
