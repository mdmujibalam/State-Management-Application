import { useRef, useState } from "react";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseByOne, decreaseByValue, increaseByOne, increaseByValue } from "../reduxtoolkit/counterSlice";

function MyToolKitApp() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleClickIncreaseByOne = () => {
    dispatch(increaseByOne());
  };

  const handleClickDecreaseByOne = () => {
    dispatch(decreaseByOne());
  };

  const handleClickIncreaseByValue = () => {
    let val = parseInt(value);
    dispatch(increaseByValue(val));
  };

  const handleClickDecreaseByValue = () => {
    let val = parseInt(value);
    dispatch(decreaseByValue(val));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>Redux Toolkit Demonstration</h2>
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
            Increase by value{" "}
          </button>
          <button onClick={handleClickDecreaseByValue}>
            Decrease by value{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default MyToolKitApp;
