import {combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
        poststate: profileReducer,
        dialogstate: dialogReducer,
        sidebarstate: sidebarReducer,
        users_state: usersReducer
    }
)

let store = createStore(reducers);

window.store=store;

export default store;
