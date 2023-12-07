import React, { lazy, useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroller";

type MyImage = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const App = () => {
  const [page, stePage] = useState<number>(1);
  const [images, steImages] = useState<object[]>([]);

  function changePage(pageNum: number) {
    stePage(pageNum);
  }

  function load() {
    fetch("https://jsonplaceholder.typicode.com/albums/" + page + "/photos")
      .then((response) => response.json())
      .then((res) => {
        const img = images;
        img.push(res);
        steImages(img);
        console.log(images[0]);
      });
  }

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={load}
        hasMore={true}
        useWindow={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <img src={images[0].url} alt="" />
      </InfiniteScroll>

      <div>
        <div className="bottom">
          <button
            onClick={() => {
              changePage(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              changePage(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              changePage(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              changePage(4);
            }}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
