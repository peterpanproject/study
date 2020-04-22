import React, { useState } from "react";

const EvenPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = (e) => {
    alert(form.username + ":" + form.message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={form.username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={form.message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EvenPractice;
