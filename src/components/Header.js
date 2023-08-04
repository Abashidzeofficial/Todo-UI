import React from "react";
import vector from "../images/Vector.svg";
import circle from "../images/circle.svg";
import remove from "../images/trash.svg";

function Header({ setInput, input, setTodo, todo }) {
  const handleSubmission = (event) => {
    event.preventDefault(); //brauzerze yoveli manipulaciis dros refreshi rom agvaridos
    setInput(""); //inputshi textis chaweris shemdeg inputi suftavdeba
    console.log(input);

    const newTodo = {
      id: new Date().getTime(),
      text: input,
      completed: false,
    };
    setTodo([...todo].concat(newTodo));
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // const handleAdded = (event) => {
  //   todo.map((input) => <div>{input.text}</div>);
  // };

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
            <img src={circle} className="circle-icon" />
          </div>
          <button className="submit-btn">
            <img src={vector} className="vector" />
          </button>
        </div>
      </form>
      <form className="result">
        <div className="result-group">
          <h1 className="input-texted">
            {todo.map((input) => (
              <div key={input.id}>{input.text}</div>
            ))}
          </h1>
          <p className="input-time-texted"></p>
        </div>
        <div className="active-remove">
          <div className="active-circle">
            <img src={circle} className="active-circle" />
          </div>
          <div className="remove">
            <img src={remove} className="remove" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Header;
