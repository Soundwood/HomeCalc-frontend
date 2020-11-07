import { combineReducers } from "redux";
import { scenariosReducer } from "./scenariosReducer";
import { usersReducer } from "./usersReducer";
import { currentUser } from './currentUser';
import loginForm from './loginForm'
import signupForm from './signupForm'

export const rootReducer = combineReducers({
    scenarios: scenariosReducer, 
    users: usersReducer,
    currentUser,
    loginForm,
    signupForm
//   users: usersReducer,
//   courses: coursesReducer,
//   beers: beerReducer,
});