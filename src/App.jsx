import "./App.css";
import { useState } from "react";

function App() {
  const [newGreetingMessage, setNewGreetingMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  console.log(newGreetingMessage);

  const showMessage = (event) => {
    setNewGreetingMessage(event.target.value);
  };

  const confirmGreetingMessage = () => {
    setGreetingMessage(newGreetingMessage);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={newGreetingMessage}
          onChange={showMessage}
        />
      </div>

      <div className="buttons">
        <button onClick={confirmGreetingMessage}>Update text</button>
      </div>
    </div>
  );
}

export default App;
