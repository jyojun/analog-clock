import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  padding: 30px 0;
  z-index: 2;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 25px;
    left: -9px;
    width: 20px;
    height: 20px;
    background: #343830;
    transform: rotate(45deg);
  }
`;

const TooltipClock = styled.div`
  background-color: #343830;
  font-size: 1rem;
  color: ivory;
  padding: 1rem;
  border-radius: 6px;
`;

export { TooltipWrapper, TooltipClock };
