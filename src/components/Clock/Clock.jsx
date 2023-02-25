import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import timerSlice from "../../store/timer";
import ClockFace from "../ClockFace/ClockFace";
import { ClockWrapper, ClockHand } from "./Clock.styled";
import { useRef } from "react";

export default function Clock() {
  const clockRef = useRef(null);
  const hours = useSelector((state) => state.timer.hours);
  const minutes = useSelector((state) => state.timer.minutes);
  const seconds = useSelector((state) => state.timer.seconds);

  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(timerSlice.actions.updateHours(new Date().getHours()));
      dispatch(timerSlice.actions.updateMinutes(new Date().getMinutes()));
      dispatch(timerSlice.actions.updateSeconds(new Date().getSeconds()));
    }, 1000);
  }, []);

  const secondDegree = (seconds * 6) % 360;
  const minuteDegree = ((minutes * 6) % 360) + secondDegree / 60;
  const hourDegree = ((hours * 6) % 360) + minuteDegree / 60;

  return (
    <ClockWrapper ref={clockRef}>
      <ClockHand
        className="hour_hand"
        style={{ transform: `rotate(${hourDegree}deg)` }}
      />
      <ClockHand
        className="minute_hand"
        style={{ transform: `rotate(${minuteDegree}deg)` }}
      />
      <ClockHand
        className="second_hand"
        style={{ transform: `rotate(${secondDegree}deg)` }}
      />
      <ClockFace />
    </ClockWrapper>
  );
}
