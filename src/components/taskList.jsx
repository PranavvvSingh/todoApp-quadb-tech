import { Box } from "@mui/material"
import Task from "./task"
import { useSelector } from "react-redux"
import { useEffect } from "react"

// this component displays the list of tasks
const TaskList = () => {
   const todos = useSelector((state) => state.todos.todos)

   // saving todos in localStorage whenever the state of todos changes
   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos])

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            marginTop: "50px",
         }}
      >
         {todos.length > 0 &&
            todos.map((todo) => (
               <Task
                  key={todo.id}
                  id={todo.id}
                  todo={todo.task}
                  completed={todo.completed}
               />
            ))}
      </Box>
   )
}

export default TaskList
