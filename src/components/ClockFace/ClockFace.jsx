import { useMemo } from "react";
import { ClockFaceWrapper, CenterCircle } from "./Face.styled";
import ClockPin from "./ClockPin";

export default function ClockFace() {
  const pinFixture = Array.from({ length: 60 }, (_, idx) => idx);

  return (
    <ClockFaceWrapper>
      {pinFixture.map((idx) => {
        return (
          <ClockPin
            key={idx}
            rotate={`rotate(${idx * 6}deg)`}
            long={idx % 5 === 0}
          />
        );
      })}
      <CenterCircle />
    </ClockFaceWrapper>
  );
}
