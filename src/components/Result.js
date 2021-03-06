import React from "react";
import Meaning from "./Meaning";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Fab from "@material-ui/core/Fab";

function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results.phonetics.map((phonetic, index) => {
          return (
            <div className="phonetics">
              <h6 className="pheneticText" key={index}>
                {phonetic.text}
              </h6>
              {phonetic.audio && (
                <a
                  className="pheneticAudio"
                  key={index}
                  href={phonetic.audio}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Fab size="small">
                    <VolumeUpIcon style={{ color: "#795369" }} />
                  </Fab>
                </a>
              )}
            </div>
          );
        })}

        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Result;
