import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [page , stePage] = useState<number>(1)
  const [images , steImages] = useState<object[]>([])

  function changePage(pageNum: number) {
    stePage(pageNum)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/" + page + "/photos")
      .then((response) => response.json())
      .then((res) => steImages(res));
  });

  return (
    <div>
      <div className="grid">
        {images?.map((item: any) => (
          <div className="container">
            <p className="title">{item.title}</p>
            <img src={item.url} alt="" className="image"/>
          </div>
        ))}
      </div>

      <div>
        <div className="bottom">
          <button onClick={() => {changePage(1)}}>1</button>
          <button onClick={() => {changePage(2)}}>2</button>
          <button onClick={() => {changePage(3)}}>3</button>
          <button onClick={() => {changePage(4)}}>4</button>
        </div>
      </div>
    </div>
  );
};

export default App;
