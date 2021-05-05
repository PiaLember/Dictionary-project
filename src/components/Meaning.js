import React from "react";

function Meaning(props) {
  let synonyms = props.meaning.definitions[0].synonyms;
  let example = props.meaning.definitions[0].example;
  console.log(props.meaning.definitions);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div className="Definition" key={index}>
            <p>{definition.definition}</p>
            <br />
            {example && <em>Example: {definition.example}</em>}
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
