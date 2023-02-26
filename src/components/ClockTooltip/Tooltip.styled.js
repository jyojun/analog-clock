import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px 0;
  z-index: 2;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 21px;
    left: -10px;
    width: 20px;
    height: 20px;
    background: #444;
    transform: rotate(45deg);
  }
`;

const TooltipClock = styled.div`
  background-color: #444;
  font-size: 1.5rem;
  color: white;
  padding: 1rem;
  border-radius: 6px;
`;

export { TooltipWrapper, TooltipClock };
