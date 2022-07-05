import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        Synonyms:{" "}
        {props.synonyms.map(function (synonyms, index) {
          return (
            <span key={index} className="synonyms">
              {synonyms}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
