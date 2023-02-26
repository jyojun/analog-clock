import styled from "styled-components";

const ClockFaceWrapper = styled.div`
  width: 100%;
  padding-top: calc(100% - 6px);
  border-radius: 50%;
  position: relative;
`;

const CenterCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 8px);
  background-color: #383830;
  border-radius: 50%;
  z-index: 1;
`;

const Pin = styled.div`
  position: absolute;
  width: 2px;
  height: 50%;
  top: 0;
  left: calc(50% - 1px);
  transform-origin: bottom;

  &::after {
    content: "";
    width: 0.2rem;
    height: 1rem;
    position: absolute;
    transform: translateX(-50%);
    background-color: black;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  &.long__pin::after {
    width: 0.4rem;
    height: 2rem;
  }
`;

export { ClockFaceWrapper, CenterCircle, Pin };
