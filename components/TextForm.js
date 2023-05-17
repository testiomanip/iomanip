import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLoClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  const handleClearClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = '';
    setText(newText);
  };


  const handleOnChange = (event) => {
    console.log("no change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <label for="textBox" class="form-label">
            {/* {props.heading} */}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textBox"
            rows="8"
          ></textarea>
          <br></br>
          <button className="btn btn-primary " onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <br/>
          <br/>
          <button className="btn btn-primary" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <br/>
          <br/>
          <button className="btn btn-primary" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-5 ">
        <h4>Your Word and Character Count</h4>
        <p>{text.split(" ").length }  and  { text.length} characters</p>
        <p>{0.008 * text.split(" ").length }  Minutes to read the form</p>
      </div>
    </>
  );
}
