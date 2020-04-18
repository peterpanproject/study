import React from "react";
import {
  faMinusSquare,
  faPenSquare,
  faCheckSquare as SfaCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TodoList = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
  color: #dbdcde;
  width: 100%;
  height: 55px;
  border-top: 2px solid #2f3339;
  &:hover {
    opacity: 0.8;
  }
`;
const TodoText = styled.div`
  width: 100%;
  color: ${(props) => (!props.checked ? "#D5DEE6" : "white")};
  text-decoration: ${(props) => !props.checked && "line-through"};
`;
const CompleteBtn = styled.div`
  width: 20px;
  margin-left: 20px;
  margin-right: 10px;
  font-size: 18px;
`;
const BtnDiv = styled.div`
  width: 40px;
  display: flex;
  margin-right: 20px;
`;
const ModifyBtn = styled.div`
  display: flex;
  font-size: 20px;
  margin-right: 5px;
  &:hover {
    color: #f06292;
  }
`;
const RemoveBtn = styled.div`
  display: flex;
  font-size: 20px;
  margin-right: 25px;
  &:hover {
    color: #f06292;
  }
`;

const TodoItem = ({
  text,
  checked,
  id,
  onToggle,
  onRemove,
  onModify,
  isModifying,
}) => {
  return (
    <TodoList onClick={() => onToggle(id)} className="todo-item">
      <CompleteBtn>
        {checked && (
          <FontAwesomeIcon
            className="remove"
            icon={SfaCheckSquare}
            color="#f06292"
          />
        )}
      </CompleteBtn>
      <TodoText checked={!checked}>{text}</TodoText>
      {!isModifying && (
        <BtnDiv>
          <ModifyBtn>
            <FontAwesomeIcon
              className="remove"
              icon={faPenSquare}
              onClick={(e) => {
                onModify(id);
                e.stopPropagation();
              }}
            />
          </ModifyBtn>
          <RemoveBtn>
            <FontAwesomeIcon
              className="remove"
              icon={faMinusSquare}
              onClick={(e) => {
                e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                onRemove(id);
              }}
            />
          </RemoveBtn>
        </BtnDiv>
      )}
    </TodoList>
  );
};

export default TodoItem;
