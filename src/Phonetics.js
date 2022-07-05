import React from "react";

export default function Phonetics(props) {
  let audio = props.phonetics.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  return (
    <div className="Phonetics">
      {" [ "}
      {props.phonetics.text} {" ]"}
      <i class="fas fa-volume-up" onClick={playAudio}></i>
    </div>
  );
}
