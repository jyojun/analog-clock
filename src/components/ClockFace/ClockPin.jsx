import { Pin } from "./Face.styled";

export default function ClockPin({ rotate, long }) {
  return (
    <Pin style={{ transform: rotate }} className={long ? "long__pin" : ""} />
  );
}
