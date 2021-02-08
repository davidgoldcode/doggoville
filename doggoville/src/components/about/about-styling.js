import styled from "styled-components";
import { ImgWithFallback } from "../../utils/ImgWithFallback";

export const Div = styled.div.attrs({
  className: "h-full w-full flex flex-col justify-start overflow-y-scroll",
})``;

export const Img = styled(ImgWithFallback).attrs({
  className: "m-4",
})`
  object-fit: contain;
  width: 90%;
  padding: 1%;
  border: 1px solid black;
`;
