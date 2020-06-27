/* global chrome */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [selection, setSelection] = useState("kittens");

  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let currentTab = tabs[0].id;
      chrome.tabs.sendMessage(currentTab, { subject: selection });
    });
  };
  return (
    <div className="App">
      <h1>Ew! I don't like these images.</h1>
      <h3>I'd much ather look at:</h3>
      <form>
        <input
          type="radio"
          id="k"
          value="kittens"
          checked={selection === "kittens"}
          onClick={() => setSelection("kittens")}
        />
        <label for="k">Kittens</label>

        <input
          type="radio"
          id="bm"
          value="Bill Murray"
          checked={selection === "Bill Murray"}
          onClick={() => setSelection("Bill Murray")}
        />
        <label for="bm">Bill Murray</label>
      </form>

      <div class="btn green" onClick={handleClick}>
        Make all images {selection}!
      </div>
    </div>
  );
}

export default App;
