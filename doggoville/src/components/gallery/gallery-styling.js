import styled from "styled-components";

// MASONIC
export const MasonicDiv = styled.div`
  padding: 8px;
  width: 100%;
  max-width: 960px;
  margin: 163px auto;
  overflow: scroll;
  height: 100%;
`;

export const Container = styled.div`
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  width: 100%;

  span:last-of-type {
    color: #fff;
  }

  &:hover {
    position: relative;
    transform: scale(1.125);
    z-index: 1000;

    span:last-of-type {
    }
  }
`;
