import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: "ITEM 1", checked: false },
      { id: 1, text: "ITEM 2", checked: false },
      { id: 2, text: "ITEM 3", checked: false },
    ],
    isModifying: false,
    ModifyingIndex: "",
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input 의 다음 바뀔 값
    });
    console.log(e.target.value);
  };

  handleCreate = () => {
    const { input, todos, isModifying, ModifyingIndex } = this.state;

    if (!isModifying) {
      this.setState({
        input: "", // 인풋 비우고
        // concat 을 사용하여 배열에 추가
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
        }),
      });
    } else {
      const index = ModifyingIndex;
      const selected = todos[index]; // 선택한 객체

      const nextTodos = [...todos]; // 배열을 복사

      nextTodos[index] = {
        ...selected,
        text: input,
      };

      this.setState({
        todos: nextTodos,
        input: "",
        isModifying: false,
      });
    }
  };

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleModify = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    this.setState({
      isModifying: true,
      input: selected.text,
      ModifyingIndex: index,
    });
  };

  render() {
    const { input, todos, isModifying } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleModify,
    } = this;
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
  }
}

export default App;
