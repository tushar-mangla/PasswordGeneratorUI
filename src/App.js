import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    setPassword();
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleIncludeUppercaseChange = () => {
    setIncludeUppercase(!includeUppercase);
  };

  const handleIncludeLowercaseChange = () => {
    setIncludeLowercase(!includeLowercase);
  };

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols);
  };
  return (
    <div className="container">
      <div>
        <h2>Password</h2>
      </div>
      <div className="settings">
        <div class="flow-root">
          <label class="float-left">Character Length:</label>

          <span class="float-right">{length}</span>
        </div>

        <input
          className="input-range"
          type="range"
          id="length"
          min="4"
          max="20"
          value={length}
          onChange={handleLengthChange}
        />

        <div className="checkboxes">
          <label className="checkbox-text">
            <input
              type="checkbox"
              className="checkbox"
              checked={includeUppercase}
              onChange={handleIncludeUppercaseChange}
            />
            Include Uppercase Letters
          </label>
          <label className="checkbox-text">
            <input
              type="checkbox"
              className="checkbox "
              checked={includeLowercase}
              onChange={handleIncludeLowercaseChange}
            />
            Include Lowercase Letters
          </label>
          <label className="checkbox-text">
            <input
              type="checkbox"
              className="checkbox"
              checked={includeNumbers}
              onChange={handleIncludeNumbersChange}
            />
            Include Numbers
          </label>
          <label className="checkbox-text">
            <input
              type="checkbox"
              className="checkbox"
              checked={includeSymbols}
              onChange={handleIncludeSymbolsChange}
            />
            Include Symbols
          </label>

          <div className="box">
            <label class="float-left">STRENGTH</label>

            <span class="float-right poor">Poor</span>
          </div>
        </div>
        <button className="generate-btn" onClick={generatePassword}>
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default App;
