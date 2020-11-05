import { combineReducers } from "redux";
import { scenariosReducer } from "./scenariosReducer";
import { usersReducer } from "./usersReducer";
import { currentUser } from './currentUser';
import loginForm from './loginForm'

export const rootReducer = combineReducers({
    scenarios: scenariosReducer, 
    users: usersReducer,
    currentUser,
    loginForm
//   users: usersReducer,
//   courses: coursesReducer,
//   beers: beerReducer,
});