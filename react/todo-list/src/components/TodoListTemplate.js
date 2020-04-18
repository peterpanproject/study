import React from "react";
// import "./TodoListTemplate.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: #D5DEE6;
  font-size: 0.9rem;
  `;
  const Container = styled.div`
  width: 500px;
  background-color: #3c424a;
  border-radius: 10px;
`;
const Title = styled.div`
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const FormSection = styled.section``;
const TodosSection = styled.section``;
const TodoListTemplate = ({ form, children }) => {
  return (
    <Wrapper className="todo-list-template">
      <Container>
        <Title className="title">오늘 할 일</Title>
        <FormSection className="form-wrapper">{form}</FormSection>
        <TodosSection className="todos-wrapper">{children}</TodosSection>
      </Container>
    </Wrapper>
  );
};

export default TodoListTemplate;
