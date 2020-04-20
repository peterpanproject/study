import React, { useState } from "react";
import TodoListTemplate from "../Components/TodoListTemplate";
import Form from "../Components/Form";
import TodoItemList from "../Components/TodoItemList";

const Todo = () => {
  let id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "ITEM 1", checked: false },
    { id: 1, text: "ITEM 2", checked: false },
    { id: 2, text: "ITEM 3", checked: false },
  ]);
  const [isModifying, setIsModifying] = useState(false);
  const [modifyingIndex, setModifyingIndex] = useState("");

  const handleChange = (e) => {
    setInput(
      e.target.value // input 의 다음 바뀔 값
    );
  };

  const handleCreate = () => {
    if (!isModifying) {
      setInput(""); // 인풋 비우고
      setTodos([...todos, { id: id++, text: input, checked: false }]);
    } else {
      const index = modifyingIndex;
      const selected = todos[index]; // 선택한 객체

      const nextTodos = [...todos]; // 배열을 복사

      nextTodos[index] = {
        ...selected,
        text: input,
      };

      setTodos(nextTodos);
      setInput("");
      setIsModifying(false);
    }
  };

  const handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  const handleToggle = (id) => {
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    setTodos(nextTodos);
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleModify = (id) => {

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    setIsModifying(true);
    setInput(selected.text);
    setModifyingIndex(index);
  };
  // console.log(this.state);

  return (
    <TodoListTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          onModify={handleModify}
          isModifying={isModifying}
        />
      }
    >
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onModify={handleModify}
        isModifying={isModifying}
      />
    </TodoListTemplate>
  );
};

export default Todo;
