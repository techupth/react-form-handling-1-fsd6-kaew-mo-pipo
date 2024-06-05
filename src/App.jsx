import "./App.css";
import { useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState("Greeting Message");

  function handleInputMessage(event) {
    setInputMessage(event.target.value);
  }
  function handleMessage() {
    setMessage(inputMessage);
  }

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          value={inputMessage}
          onChange={handleInputMessage}
          id="greeting-message"
          type="text"
        />
      </div>

      <div className="buttons">
        <button onClick={handleMessage}>Update text</button>
      </div>
    </div>
  );
}

export default App;
