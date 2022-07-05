import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //Documentation: https://api.dictionaryapi.dev/
    let apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en_US/ ${keyword}/`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="text" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
