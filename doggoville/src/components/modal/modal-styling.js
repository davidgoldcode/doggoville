import styled from "styled-components";

export const Div = styled.div.attrs({
  className: "rounded w-2/3 h-1/3 bg-white",
})`
  position: absolute;
  left: 50%;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 501;
`;

export const GrayBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
  z-index: 500;
  opacity: 25%;
`;
