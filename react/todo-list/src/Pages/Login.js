import React, { useState } from "react";
import styled from "styled-components";
import useFormValidation from "../Components/useFormValidation";
import validateLogin from "../Components/validateLogin";
import firebase from "firebase";

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
const InputEmail = styled.input`
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
  const {
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);

  function authenticateUser() {
    const { name, email, password } = values;
    const response = login
      ? firebase.login(email, password)
      : firebase.register(name, email, password);
    console.log({ response });
  }
  
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
              autoComplete="off"
            />
          )}
          <InputEmail
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="EMAIL"
            autoComplete="off"
          />
          {errors.email && <p>{errors.email}</p>}
          <InputPW
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="PASSWORD"
            autoComplete="off"
          />
          {errors.password && <p>{errors.password}</p>}

          {!login && (
            <InputPW
              onChange={handleChange}
              type="password"
              name="passwordCheck"
              placeholder="CONFIRM PASSWORD"
              autoComplete="off"
            />
          )}

          <SubmitBtn type="submit" disabled={isSubmitting}>
            {login ? "LOGIN" : "REGISTER"}
          </SubmitBtn>
        </InputForm>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
