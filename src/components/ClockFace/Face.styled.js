import styled from "styled-components";

const ClockFaceWrapper = styled.div`
  width: 100%;
  padding-top: calc(100% - 6px);
  border-radius: 50%;
  position: relative;
  box-shadow: 10px 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const CenterCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 8px);
  background-color: #333333;
  border-radius: 50%;
  z-index: 1;
`;

const Pin = styled.div`
  position: absolute;
  width: 2px;
  height: 50%;
  top: 0;
  left: 50%;
  transform-origin: bottom;

  &::after {
    content: "";
    width: 5px;
    height: 12px;
    position: absolute;
    transform: translateX(-50%);
    background-color: #555;
  }

  &.long__pin::after {
    width: 9px;
    height: 20px;
  }
`;

export { ClockFaceWrapper, CenterCircle, Pin };
