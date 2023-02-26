import { useDispatch, useSelector } from "react-redux";
import ClockFace from "../ClockFace/ClockFace";
import { ClockWrapper, ClockHand } from "./Clock.styled";
import { useRef } from "react";
import mouseTracerSlice from "../../store/mouseTracer";
import Tooltip from "../ClockTooltip/Tooltip";
import { inCircle } from "../../utils";
import { useCallback } from "react";

export default function Clock() {
  const clockRef = useRef(null);
  const dispatch = useDispatch();

  const hours = useSelector((state) => state.timer.date.hours);
  const minutes = useSelector((state) => state.timer.date.minutes);
  const seconds = useSelector((state) => state.timer.date.seconds);

  const secondDegree = (seconds * 6) % 360;
  const minuteDegree = ((minutes * 6) % 360) + secondDegree / 60;
  const hourDegree = ((hours * 6) % 360) + minuteDegree / 60;

  const tooltipDisplay = useSelector((state) => state.mouseTracer.loc.isInside);

  const onMouseMove = useCallback((e) => {
    const {
      top: offsetY,
      left: offsetX,
      width,
    } = clockRef.current.getBoundingClientRect();

    const { clientX, clientY } = e;
    const [centerX, centerY] = [offsetX + width / 2, offsetY + width / 2];
    if (!inCircle(centerX, centerY, clientX, clientY, width)) {
      dispatch(
        mouseTracerSlice.actions.update({
          x: 0,
          y: 0,
          isInside: false,
        })
      );
    } else {
      dispatch(
        mouseTracerSlice.actions.update({
          x: clientX - offsetX,
          y: clientY - offsetY,
          isInside: true,
        })
      );
    }
  }, []);

  const onMouseLeave = useCallback((e) => {
    dispatch(
      mouseTracerSlice.actions.update({
        x: 0,
        y: 0,
        isInside: false,
      })
    );
  }, []);
  return (
    <ClockWrapper
      ref={clockRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
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
      {tooltipDisplay && (
        <Tooltip timer hours={hours} minutes={minutes} seconds={seconds} />
      )}
    </ClockWrapper>
  );
}
