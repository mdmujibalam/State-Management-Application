import { useRef, useState } from "react";
import "../src/css/App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const handleClickIncreaseByOne = () => {
    setCount(count + 1);
  };

  const handleClickDecreaseByOne = () => {
    setCount(count - 1);
  };

  const handleClickIncreaseByValue = () => {
    setCount((count) => count + parseInt(value));
  };

  const handleClickDecreaseByValue = () => {
    setCount((count) => count - parseInt(value));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>Redux Demonstration</h2>
      <div className="card">
        <h2>Count : {count}</h2>
        <input
          type="number"
          className="inputBox"
          onChange={handleChange}
          defaultValue={value}
        />

        <div className="buttonList">
          <button onClick={handleClickIncreaseByOne}>Increase by one </button>
          <button onClick={handleClickDecreaseByOne}>Decrease by one </button>
          <button onClick={handleClickIncreaseByValue}>
            Increase by value
          </button>
          <button onClick={handleClickDecreaseByValue}>
            Decrease by value
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
