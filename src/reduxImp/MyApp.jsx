import { useRef, useState } from "react";
import "../css/App.css";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { decreaseByOne, decreaseByValue, increaseByOne, increaseByValue } from "../redux/actions/counterAction";

function MyApp() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleClickIncreaseByOne = () => {
    // setCount(count + 1);
    //dispatch({ type: "INCREASE_BY_ONE" });
    dispatch(increaseByOne());
  };

  const handleClickDecreaseByOne = () => {
    //  setCount(count - 1);
    //dispatch({ type: "DECREASE_BY_ONE" });
    dispatch(decreaseByOne());
  };

  const handleClickIncreaseByValue = () => {
    //setCount((count) => count + parseInt(value));
    let val = parseInt(value);
    //dispatch({ type: "INCREASE_BY_VALUE", value: val });
    dispatch(increaseByValue(val));
  };

  const handleClickDecreaseByValue = () => {
    // setCount((count) => count - parseInt(value));
    let val = parseInt(value);
    //dispatch({ type: "DECREASE_BY_VALUE", value: val });
    dispatch(decreaseByValue(val));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // console.log("Store",store);

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
            Increase by value{" "}
          </button>
          <button onClick={handleClickDecreaseByValue}>
            Decrease by value{" "}
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default MyApp;
