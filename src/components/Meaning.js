import React from "react";

function Meaning(props) {
  let synonyms = props.meaning.definitions[0].synonyms;
  let example = props.meaning.definitions[0].example;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div className="Definition" key={index}>
            <p>‣ {definition.definition}</p>
            <br />
            {example && <em>Example: {definition.example}</em>}
          </div>
        );
      })}

      <ul className="Synonyms">
        {synonyms && <h5>Synonyms:</h5>}
        <div className="SynonymList">
          {synonyms &&
            synonyms.map((synItem, index) => <li key={index}>{synItem}</li>)}
        </div>
      </ul>
    </div>
  );
}

export default Meaning;
