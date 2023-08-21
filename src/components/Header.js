import React from "react";
import vector from "../images/Vector.svg";
import circle from "../images/circle.svg";
import remove from "../images/trash.svg";
import emptyCircle from "../images/empty_circle.svg";

function Header({
  setInput,
  input,
  setTodo,
  todo,
  time,
  setTime,
  changeCircle,
  setChangeCircle,
}) {
  const handleSubmission = (event) => {
    event.preventDefault(); //brauzerze yoveli manipulaciis dros refreshi rom agvaridos tavidan
    setInput(""); //inputshi textis chaweris shemdeg inputi suftavdeba
    console.log(input);

    const newTodo = {
      id: new Date().getTime(),
      text: input,
      completed: false,
      isCircleFilled: false,
    };
    setTodo([...todo].concat(newTodo));

    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
    console.log(time);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleRemoveClick = (id) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
  };

  // const handleClick = () => {
  //   setChangeCircle(changeCircle ? emptyCircle : circle);
  //   console.log(changeCircle);
  // };

  const handleCircleClick = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, isCircleFilled: !item.isCircleFilled } : item
    );
    setTodo(updatedTodo);
  };

  return (
    <div className="app">
      <form className="header" onSubmit={handleSubmission}>
        <div className="header-group">
          <div className="input-group">
            <input
              type="text"
              className="input-txt"
              placeholder="Note"
              onChange={handleChange}
              value={input}
            ></input>
            <img
              src={input.isCircleFilled ? circle : emptyCircle}
              className="circle-icon"
              alt="Circle"
              onClick={() => handleCircleClick(input.id)}
            />
          </div>
          <button className="submit-btn">
            <img src={vector} className="vector" />
          </button>
        </div>
      </form>
      <h1 className="result">
        {todo.map((input) => (
          <p className="id-text" key={input.id}>
            {input.text} <h2 className="timeline"> Today {time}</h2>
            <div className="img">
              <img
                src={input.isCircleFilled ? circle : emptyCircle}
                className="active-circle"
                onClick={() => handleCircleClick(input.id)}
              />
              <img
                src={remove}
                className="remove"
                onClick={() => handleRemoveClick(input.id)}
              />
            </div>
          </p>
        ))}
      </h1>
    </div>
  );
}

export default Header;
