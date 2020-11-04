import { combineReducers } from "redux";
import { scenariosReducer } from "./scenariosReducer";
// import { usersReducer } from "./usersReducer";
// import { beerReducer } from "./beerReducer";

export const rootReducer = combineReducers({
    scenarios: scenariosReducer
//   users: usersReducer,
//   courses: coursesReducer,
//   beers: beerReducer,
});