import "./App.css"
import { Container, Typography } from "@mui/material"
import TaskInput from "./components/taskInput"
import TaskList from "./components/taskList"

function App() {
   return (
      <Container>
         <Typography
            fontSize={"40px"}
            sx={{ mx: "auto", textAlign: "center", paddingY: "30px" }}
         >
            To-Do App
         </Typography>
         <TaskInput />
         <TaskList />
      </Container>
   )
}

export default App
