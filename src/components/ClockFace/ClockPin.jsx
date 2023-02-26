import { Pin } from "./Face.styled";

export default function ClockPin({ degree, long }) {
  return (
    <Pin
      style={{ transform: `rotate(${degree}deg)` }}
      className={long ? "long__pin" : ""}
    />
  );
}
