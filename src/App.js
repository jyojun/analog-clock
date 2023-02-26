import Clock from "./components/Clock/Clock";
import { useEffect } from "react";
import timerSlice from "./store/timer";
import { useDispatch } from "react-redux";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch(
        timerSlice.actions.update({
          hours: new Date().getHours(),
          minutes: new Date().getMinutes(),
          seconds: new Date().getSeconds(),
        })
      );
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;
