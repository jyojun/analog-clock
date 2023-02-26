import { useSelector } from "react-redux";
import { TooltipWrapper, TooltipClock } from "./Tooltip.styled";

export default function Tooltip({ hours, minutes, seconds }) {
  const mouseLoc = useSelector((state) => state.mouseTracer.loc);
  const timeText = () => {
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <TooltipWrapper
      style={{
        transform: `translate(${mouseLoc.x}px, ${mouseLoc.y}px)`,
      }}
    >
      <TooltipClock>{timeText()}</TooltipClock>
    </TooltipWrapper>
  );
}
