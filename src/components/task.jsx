import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { MdOutlineFileDownloadDone as Done } from "react-icons/md"
import { RxCross2 as Undone } from "react-icons/rx"
import { MdDelete as Delete } from "react-icons/md"
import { useDispatch } from "react-redux"
import { completeTodo, incompleteTodo, removeTodo } from "../feaures/todos"


// this component displays a single task
const Task = (props) => {
   const dispatch = useDispatch()
   return (
      <Box
         sx={{
            width: "600px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 2,
            paddingY: 1.5,
            borderRadius: "10px",
            backgroundColor: props?.completed
               ? "rgb(0, 255, 0, 0.3)"
               : "rgb(255, 215, 0, 0.5)",
            transition: "transform 0.5s",
            "&:hover": {
               transform: "scale(1.03)",
            },
         }}
      >
         <Typography>{props?.todo}</Typography>
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               gap: 3,
               fontSize: "25px",
            }}
         >
            {/* conditionally display icon if task is completed or not */}
            {props.completed ? (
               // button to mark a task as incomplete
               <Tooltip title="Mark Unfinished" placement="left" arrow>
                  <IconButton
                     onClick={() => dispatch(incompleteTodo(props?.id))}
                  >
                     <Undone color="white" />
                  </IconButton>
               </Tooltip>
            ) : (
               // button to mark a task as completed
               <Tooltip title="Mark Complete" placement="left" arrow>
                  <IconButton onClick={() => dispatch(completeTodo(props?.id))}>
                     <Done color="white" />
                  </IconButton>
               </Tooltip>
            )}

            {/* button to delete a task */}
            <Tooltip title="Delete Task" placement="right" arrow>
               <IconButton onClick={() => dispatch(removeTodo(props?.id))}>
                  <Delete color="white" />
               </IconButton>
            </Tooltip>
         </Box>
      </Box>
   )
}

export default Task
