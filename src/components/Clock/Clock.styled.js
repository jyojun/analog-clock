import styled from "styled-components";

const ClockWrapper = styled.div`
  position: relative;
  max-width: 780px;
  width: 100%;
  margin: 50px auto;
  border-radius: 50%;
`;

const ClockHand = styled.div`
  position: absolute;
  background: black;

  bottom: calc(50% - 2px);
  border-radius: 5px;

  transform-origin: bottom;
  &.hour_hand {
    height: 30%;
    width: 10px;
    left: calc(50% - 5px);
  }

  &.minute_hand {
    height: 40%;
    width: 7px;
    background: blue;
    left: calc(50% - 5px);
  }

  &.second_hand {
    height: 45%;
    width: 3px;
    background: red;
    left: calc(50% + 1px);
  }
`;
export { ClockWrapper, ClockHand };
