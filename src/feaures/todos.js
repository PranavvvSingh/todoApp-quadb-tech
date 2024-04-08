import { createSlice } from "@reduxjs/toolkit"

// fetching todos from local storage
// if no todos are present default tasks are added 
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [
   { id: 1, task: "Test Task 1", completed: true },
   { id: 2, task: "Test Task 2", completed: false },
]

const initialState = {
   todos: [...savedTodos],
}

export const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      // reducer to add a new task
      addTodo: (state, action) => {
         state.todos.push({
            id: crypto.randomUUID(),
            task: action.payload,
            completed: false,
         })
      },

      // reducer to mark a task complete
      completeTodo: (state, action) => {
         const index = state.todos.findIndex(
            (todo) => todo.id === action.payload,
         )
         state.todos[index].completed = true
      },

      // reducer to mark a task incomplete
      incompleteTodo: (state, action) => {
         const index = state.todos.findIndex(
            (todo) => todo.id === action.payload,
         )
         state.todos[index].completed = false
      },

      // reducer to delete a task
      removeTodo: (state, action) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      },
   },
})

export const { addTodo, completeTodo, removeTodo, incompleteTodo } =
   todoSlice.actions

export default todoSlice.reducer
