import React from "react";
// import "./Form.css";
import styled from "styled-components";
import { faPenSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const Inputs = styled.input`
  padding-left: 15px;
  margin-left: 25px;
  background-color: #343a40;
  border: 2px solid #2f3339;
  border-radius: 4px;
  color: white;
  width: 100%;
  height: 30px;
`;

const ModifyBtn = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 5px;
  &:hover {
    color: #d5dee6;
  }
  margin-right: 20px;
  margin-left: 10px;
`;
const AddBtn = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 5px;
  &:hover {
    color: #d5dee6;
  }
  margin-right: 20px;
  margin-left: 10px;
`;
const Form = ({ value, onChange, onCreate, onKeyPress, isModifying }) => {
  return (
    <InputForm className="form">
      <Inputs
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="할 일을 입력해주세요"
      />
      {isModifying ? (
        <ModifyBtn>
          <FontAwesomeIcon color="#f06292" icon={faPenSquare} onClick={onCreate}/>
        </ModifyBtn>
      ) : (
        <AddBtn>
          <FontAwesomeIcon color="#f06292" icon={faPlusSquare} onClick={onCreate}/>
        </AddBtn>
      )}
    </InputForm>
  );
};

export default Form;
