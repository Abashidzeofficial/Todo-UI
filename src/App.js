import React from "react";
import { useState } from "react";
import rectangle from "./images/Rectangle.svg";

//style
import "./App.css";
import "./components/style.css";
//components
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const [removeTxt, setRemoveTxt] = useState(false);
  const [time, setTime] = useState("");
  const [changeCircle, setChangeCircle] = useState(false);

  return (
    <div className="wrapper">
      <img src={rectangle} className="logo" />
      <div className="container">
        <Header
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          removeTxt={removeTxt}
          setRemoveTxt={setRemoveTxt}
          time={time}
          setTime={setTime}
          changeCircle={changeCircle}
          setChangeCircle={setChangeCircle}
        />
      </div>
    </div>
  );
}

export default App;
