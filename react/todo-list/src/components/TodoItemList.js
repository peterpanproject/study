import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos, onToggle, onRemove, onModify, isModifying } ) => {

  const todoList = todos.map(({ id, text, checked }) => (
    <TodoItem
      id={id}
      text={text}
      checked={checked}
      onToggle={onToggle}
      onRemove={onRemove}
      onModify={onModify}
      key={id}
      isModifying={isModifying}
    />
  ));
  return todoList;
};

export default TodoItemList;
