import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

function Dictionary() {
  let [inputText, setInputText] = useState("");
  let [results, setResults] = useState(null);
  let [clicked, setClicked] = useState("🇺🇸 What word do you want to look up?");
  let [language, setLanguage] = useState("en_US");
  let [buttonText, setButtonText] = useState("🇩🇪 DE");

  function showDE() {
    setClicked("🇩🇪 Welches Wort möchten Sie nachschlagen?");
    setLanguage("de");
    setButtonText("🇺🇸 EN");
    setResults(null);
  }
  function showEN() {
    setClicked("🇺🇸 What word do you want to look up?");
    setLanguage("en_US");
    setButtonText("🇩🇪 DE");
    setResults(null);
  }
  function hanleResponse(response) {
    setResults(response.data[0]);
    setInputText("");
  }
  function search(event) {
    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${inputText}`;
    axios.get(apiUrl).then(hanleResponse);

    event.preventDefault();
  }
  function handleInput(event) {
    let newText = event.target.value;
    setInputText(newText);
  }

  return (
    <div className="Dictionary">
      {language === "en_US" ? (
        <div>
          <button onClick={showDE}>{buttonText}</button>
          <h4>{clicked}</h4>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleInput}
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _✍︎"
              value={inputText}
            />
          </form>
        </div>
      ) : (
        <div>
          <button onClick={showEN}>{buttonText}</button>
          <h4>{clicked}</h4>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleInput}
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _✍︎"
              value={inputText}
            />
          </form>
        </div>
      )}

      <Result results={results} />
    </div>
  );
}

export default Dictionary;
