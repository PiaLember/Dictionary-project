import React, { useState } from "react";

function Dictionary() {
  let [inputText, setInputText] = useState("");

  function search(event) {
    alert(`searching for ${inputText}`);
    event.preventDefault();
  }
  function handleInput(event) {
    let newText = event.target.value;
    setInputText(newText);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput} autoFocus={true} />
      </form>
    </div>
  );
}

export default Dictionary;
