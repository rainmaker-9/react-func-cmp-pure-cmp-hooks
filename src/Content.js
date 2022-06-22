import React, { useEffect, useState } from "react";
import "./Content.css";

function Content() {
  const [type, setType] = useState("posts");
  const changeType = (value) => {
    setType(value);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [type]);

  return (
    <div>
      <div id="buttons">
        <button onClick={() => changeType("posts")}>Posts</button>
        <button onClick={() => changeType("comments")}>Comments</button>
        <button onClick={() => changeType("users")}>Users</button>
      </div>
      <h1>{type}</h1>
    </div>
  );
}

export default Content;
