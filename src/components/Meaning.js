import React from "react";

function Meaning(props) {
  let synonyms = props.meaning.definitions[0].synonyms;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div className="Definition" key={index}>
            <p>{definition.definition}</p>
            <br />
            <em>Example: {definition.example}</em>
          </div>
        );
      })}
      <div className="Synonyms">
        {synonyms && <h5>Synonyms:</h5>}
        <div>
          {synonyms &&
            synonyms.map((synItem, index) => <dd key={index}>{synItem}</dd>)}
        </div>
      </div>
    </div>
  );
}

export default Meaning;
