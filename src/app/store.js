import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../feaures/todos"

// this is the redux store
export const store = configureStore({
   reducer: { todos:todoReducer },
})
