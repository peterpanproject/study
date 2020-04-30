import React, { useState } from "react";
import * as tmImage from "@teachablemachine/image";
import "./App.css";
import styled from "styled-components";
import Switch from "./components/Switch";

const WindowWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 130vh;
  background-color: blue;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 8.3vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  font-weight: 600;
  background-color: #c43333;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20.7vh;
  background-color: orange;
`;
const Gender = styled.div``;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61vh;
  background-color: lightblue;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vh;
  height: 50vh;
  cursor: pointer;
  background-color: yellowgreen;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: pink;
`;
const Input = styled.input.attrs((props) => ({ type: "file" }))`
  display: none;
`;

const App = () => {
  const [result, setResult] = useState([]);
  const [isChecked, setIsChecked] = useState(false)
  const [state, setState] = useState({
    file: "",
    imagePreviewUrl: "",
  });
  const URL = "https://teachablemachine.withgoogle.com/models/EeDNh2EX7/";
  let model;

  const onChange = async (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
    init().then(() => predict());
    // console.log(e.target.files[0]);
  };

  const onChangeGender = () => {
    setIsChecked(!isChecked)
  };

  // Load the image model and setup the webcam
  async function init() {
    // console.log("init");
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    model = await tmImage.load(modelURL, metadataURL);
    // maxPredictions = model.getTotalClasses();
  }

  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(
      document.getElementById("img_preview")
    )
    await setResult(prediction);
  }

  return (
    <WindowWrap>
      <Wrapper>
        <Header>동물상 테스트</Header>
        <TopContainer>
          <Switch isChecked={isChecked} changeGender={onChangeGender} />
        </TopContainer>
        <InputContainer>
          <InputDiv>
            {!state.imagePreviewUrl && (
              <label>
                <InputDiv>이곳을 눌러서 사진을 올리세요.</InputDiv>
                <Input
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </label>
            )}
            {state.imagePreviewUrl && (
              <img
                id="img_preview"
                src={state.imagePreviewUrl}
                alt="Your Face"
              />
            )}
          </InputDiv>
        </InputContainer>
        <BottomContainer />
      </Wrapper>
    </WindowWrap>
  );
};

export default App;
