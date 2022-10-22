import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./TodoItem";

function TodoList({ todos, markTodo, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Card>
          <Card.Body>
            <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
