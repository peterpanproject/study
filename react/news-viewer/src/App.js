import React, { useState } from "react";
import axios from "axios";
import NewList from "./components/NewList";

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    const API_KEY = "8dc1468d2cd24b45af9e0500635d5039";
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}
      `
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <NewList data={data} />
      <button onClick={onClick}>불러오기</button>
    </div>
  );
}

export default App;
// 8dc1468d2cd24b45af9e0500635d5039
