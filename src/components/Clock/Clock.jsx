import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import timerSlice from "../../store/timer";
import ClockFace from "../ClockFace/ClockFace";

export default function Clock() {
  const dispatch = useDispatch();
  const hours = useSelector((state) => state.timer.hours);
  const minutes = useSelector((state) => state.timer.minutes);
  const seconds = useSelector((state) => state.timer.seconds);

  useEffect(() => {
    setInterval(() => {
      dispatch(timerSlice.actions.updateHours(new Date().getHours()));
      dispatch(timerSlice.actions.updateMinutes(new Date().getMinutes()));
      dispatch(timerSlice.actions.updateSeconds(new Date().getSeconds()));
    }, 1000);
  }, []);

  return (
    <div>
      {hours} {minutes} {seconds}
      <ClockFace />
    </div>
  );
}
