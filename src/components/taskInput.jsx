import { Box, IconButton, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { IoAddCircle } from "react-icons/io5"
import { addTodo } from "../feaures/todos"
import { useState } from "react"

// this component creates a new task
const TaskInput = () => {
   const [task, setTask] = useState("")
   const dispatch = useDispatch()

   const onSubmit = (event) => {
      // prevent default page reload
      event.preventDefault()
      dispatch(addTodo(task))
      // resetting the textfield
      setTask("")
   }
   return (
      <Box
         component="form"
         sx={{
            width: "50%",
            mx: "auto",
         }}
         onSubmit={onSubmit}
      >
         <TextField
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Create Task"
            variant="outlined"
            fullWidth
            sx={{
               input: { color: "white", paddingLeft: 3, fontSize: "18px" },
               "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                     borderColor: "white",
                  },
                  "&:hover fieldset": {
                     borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                     borderColor: "white",
                  },
               },
            }}
            InputProps={{
               sx: { borderRadius: "30px" },
               endAdornment: (
                  <IconButton onClick={onSubmit}>
                     <IoAddCircle color="white" fontSize={30} />
                  </IconButton>
               ),
            }}
            inputProps={{ spellCheck: "false" }}
         />
      </Box>
   )
}

export default TaskInput
