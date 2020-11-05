import { combineReducers } from "redux";
import { scenariosReducer } from "./scenariosReducer";
import { usersReducer } from "./usersReducer";
import { currentUser } from './currentUser'

export const rootReducer = combineReducers({
    scenarios: scenariosReducer, 
    users: usersReducer,
    currentUser
//   users: usersReducer,
//   courses: coursesReducer,
//   beers: beerReducer,
});