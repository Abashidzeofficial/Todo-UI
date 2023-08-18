import React from "react";
import vector from "../images/Vector.svg";
import circle from "../images/circle.svg";
import remove from "../images/trash.svg";

function Header({ setInput, input, setTodo, todo, removeTxt, setRemoveTxt }) {
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
  const handleRemoveClick = (id) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
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
            <img src={circle} className="circle-icon" />
          </div>
          <button className="submit-btn">
            <img src={vector} className="vector" />
          </button>
        </div>
      </form>
      <h1 className="result">
        {todo.map((item) => (
          <p className="id-text" key={item.id}>
            {item.text}
            <div className="img">
              <img src={circle} className="active-circle" />
              <img
                src={remove}
                className="remove"
                onClick={() => handleRemoveClick(item.id)}
              />
            </div>
          </p>
        ))}
      </h1>
    </div>
  );
}

export default Header;
