import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;
const LoginTitle = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubDiv = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
`;
const TitleDiv = styled.div`
  width: 130px;
  background-color: pink;
`;
const InputDiv = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
`;
const InputID = styled.input`
  width: 220px;
  height: 28px;
  padding-left: 15px;
  margin-bottom: 13px;
  border: 2px solid #2f3339;
  border-radius: 4px;
`;
const InputPW = styled.input`
  width: 220px;
  height: 28px;
  padding-left: 15px;
  margin-bottom: 18px;
  border: 2px solid #2f3339;
  border-radius: 4px;
`;
const SubmitBtn = styled.div`
  width: 150px;
  height: 30px;
  background-color: #343a40;
  border: 2px solid #2f3339;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;
const InputRadio = styled.input``;
const InputSelect = styled.select``;
const InputCheckbox = styled.input``;
const InputTextarea = styled.input``;
const Register = () => {
  return (
    <Wrapper>
      <LoginContainer>
        <LoginTitle>Register</LoginTitle>
        <InputContainer>
          <SubDiv>
            <TitleDiv>아이디</TitleDiv>
            <InputDiv>
              <InputID type="text" placeholder="ID를 입력하세요" />
              <div>중복체크</div>
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <TitleDiv>비밀번호</TitleDiv>
            <InputDiv>
              <InputPW type="password" placeholder="비밀번호를 입력하세요" />
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <TitleDiv>비밀번호확인</TitleDiv>
            <InputDiv>
              <InputPW />
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <TitleDiv>성별</TitleDiv>
            <InputDiv>
              <InputRadio type="radio" /> 남
              <InputRadio type="radio" />여
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <TitleDiv>생년월일</TitleDiv>
            <InputDiv>
              <InputSelect />년<InputSelect />월<InputSelect />일
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <TitleDiv>취미</TitleDiv>
            <InputDiv>
              <InputCheckbox type="checkbox" />
              연애
              <InputCheckbox type="checkbox" />
              게임
              <InputCheckbox type="checkbox" />
              영화보기
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <TitleDiv>자기소개</TitleDiv>
            <InputDiv>
              <InputTextarea type="textarea" />
            </InputDiv>
          </SubDiv>
          <SubDiv>
            <SubmitBtn>취소 버튼</SubmitBtn>
            <SubmitBtn>가입완료 버튼</SubmitBtn>
          </SubDiv>
        </InputContainer>
      </LoginContainer>
    </Wrapper>
  );
};

export default Register;
