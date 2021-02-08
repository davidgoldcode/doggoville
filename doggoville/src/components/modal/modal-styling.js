import styled from "styled-components";

// Modal Div
export const Div = styled.div.attrs({
  className:
    "w-2/3 h-auto max-h-1/2 border flex flex-col justify-around items-center	rounded p-2 m-2 bg-gray-100 z-50 overflow-scroll",
})`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

// Search Title
export const H2 = styled.h2.attrs({
  className: "lg:text-2xl md:text-xl text-l font-black m-2 uppercase",
})``;

// Search Input
export const Input = styled.input.attrs({
  className:
    "w-5/6 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm",
})`
  z-index: 10000;
`;

// Opaque "clicking" background
export const GrayBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
  z-index: 1;
  opacity: 25%;
`;

// Div around search results
export const SearchDiv = styled.div.attrs({
  className: "w-3/4 h-auto flex p-2 m-2 flex-wrap overflow-y-scroll uppercase",
})``;
