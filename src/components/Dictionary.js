import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

function Dictionary() {
  let [inputText, setInputText] = useState("");
  let [results, setResults] = useState(null);

  function hanleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputText}`;
    axios.get(apiUrl).then(hanleResponse);

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
      <Result results={results} />
    </div>
  );
}

export default Dictionary;
