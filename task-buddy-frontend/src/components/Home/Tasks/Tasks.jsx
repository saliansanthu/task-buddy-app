import {
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Task from "./Task/Task";
import { createTask, getTasks, updateTask } from "../../../actions/tasks";
import ClearIcon from "@material-ui/icons/Clear";

const defaultTask = { title: "", content: "" };

const Tasks = () => {
  const [task, setTask] = useState(defaultTask);
  const [selectedTask, setSelectedTask] = useState(null);
  const classes = useStyles();
  const selectedPage = useSelector((state) => state.selectedPage);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(selectedPage));
  }, [dispatch, selectedPage]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!selectedTask) {
      dispatch(createTask(selectedPage, task));
    } else {
      dispatch(updateTask(selectedPage, selectedTask, task));
      setSelectedTask(null);
    }
    setTask(defaultTask);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((oldTask) => ({ ...oldTask, [name]: value }));
  };

  const handleEditTask = (t) => {
    setSelectedTask(t);
    const { title, content } = t;
    setTask({ title, content });
  };

  const handleClearForm = () => {
    setSelectedTask(null);
    setTask(defaultTask);
  };

  return (
    <Container>
      <Typography variant="h5" className={classes.color}>
        {selectedPage.title.substring(0, 10).toUpperCase()}
      </Typography>
      <Card className={classes.card}>
        <form onSubmit={handleFormSubmit}>
          <CardContent>
            <Typography variant="subtitle1" className={classes.color}>
              {selectedTask
                ? `Edit "${selectedTask.title}"`
                : "Create A New Task"}
            </Typography>
            <TextField
              variant="standard"
              type="text"
              required
              name="title"
              onChange={handleChange}
              value={task.title}
              placeholder="Title"
              fullWidth
              InputProps={{
                style: { color: "#fff" },
                inputProps: { minLength: 2, maxLength: 32 },
              }}
              autoComplete="off"
            />
            <TextField
              variant="standard"
              type="text"
              name="content"
              placeholder="Content"
              onChange={handleChange}
              value={task.content}
              fullWidth
              multiline
              InputProps={{
                style: { color: "#fff" },
                inputProps: { maxLength: 300 },
              }}
            />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <IconButton className={classes.color} type="submit">
              <AddCircleIcon />
            </IconButton>
            <IconButton className={classes.color} onClick={handleClearForm}>
              <ClearIcon />
            </IconButton>
          </CardActions>
        </form>
      </Card>
      {tasks.map((task, index) => (
        <Task
          key={task._id}
          task={task}
          selectedPage={selectedPage}
          handleEditTask={handleEditTask}
        />
      ))}
    </Container>
  );
};

export default Tasks;
