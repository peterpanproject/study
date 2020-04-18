import React, { useState } from "react";
import styled from "styled-components";
import useFormValidation from "../Components/useFormValidation";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  justify-content: center;
  align-items: center;
`;
const LogRegBtn = styled.div`
  width: 100px;
  height: 60px;
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
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 400px;
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
const InputForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputName = styled.input`
  width: 220px;
  height: 30px;
  padding-left: 15px;
  margin-bottom: 13px;
  border: 2px solid #2f3339;
  border-radius: 4px;
`;
const InputID = styled.input`
  width: 220px;
  height: 30px;
  padding-left: 15px;
  margin-bottom: 13px;
  border: 2px solid #2f3339;
  border-radius: 4px;
`;
const InputPW = styled.input`
  width: 220px;
  height: 30px;
  padding-left: 15px;
  margin-bottom: 15px;
  border: 2px solid #2f3339;
  border-radius: 4px;
`;
const SubmitBtn = styled.button`
  width: 150px;
  height: 40px;
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

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  passwordCheck: "",
};

const Login = (props) => {
  const [login, setLogin] = useState(true);
  const { handleChange, handleSubmit, values } = useFormValidation(
    INITIAL_STATE
  );
  return (
    <Wrapper>
      <LoginContainer>
        <LogRegBtn onClick={() => setLogin(!login)}>
          {login ? "REGISTER" : "LOGIN"}
        </LogRegBtn>
        <LoginTitle>{login ? "LOGIN" : "REGISTER"}</LoginTitle>
        <InputForm onSubmit={handleSubmit}>
          {!login && (
            <InputName
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="NAME"
            />
          )}
          <InputID
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="EMAIL"
          />
          <InputPW
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="PASSWORD"
          />
          {!login && (
            <InputPW
              onChange={handleChange}
              type="password"
              name="passwordCheck"
              placeholder="CONFIRM PASSWORD"
            />
          )}

          <SubmitBtn type="submit">{login ? "LOGIN" : "REGISTER"}</SubmitBtn>
        </InputForm>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
