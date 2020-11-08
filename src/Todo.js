import React from "react";
import "./Todo.css";
import {
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.task} secondary="dummy deadline" />
      </ListItem>
      <DeleteForeverIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
