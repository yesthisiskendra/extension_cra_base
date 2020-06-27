/* global chrome */
import React from "react";
import "./App.css";

function App() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let currentTab = tabs[0].id;
    chrome.tabs.sendMessage(currentTab, { animal: "kitten" });
  });

  return (
    <div className="App">
      <h1>MAKE THEM ALL CATS!</h1>
    </div>
  );
}

export default App;
