import styled from "styled-components";

export const MasonicDiv = styled.div.attrs({
  className: "w-full h-full p-2 scroll relative text-center",
})`
  max-width: 960px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
