import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../../actions/tasks";
import EditIcon from "@material-ui/icons/Edit";

const Task = ({ task, selectedPage, handleEditTask }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(selectedPage, task));
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle1" className={classes.color}>
          {task.title}
        </Typography>
        <Typography variant="body2" className={classes.color}>
          {task?.content}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton
          className={classes.color}
          onClick={() => handleEditTask(task)}
        >
          <EditIcon />
        </IconButton>
        <IconButton className={classes.color} onClick={handleDeleteTask}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Task;
