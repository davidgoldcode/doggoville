import styled from "styled-components";
import { Link as Anchor } from "react-router-dom";

// Sidebar anchor tags / routes
export const Link = styled(Anchor).attrs({
  className:
    "text-primary lg:text-2xl md:text-xl text-l font-black m-2 lowercase hover:text-primaryDarker",
})``;

// Lists displaying breeds, subbreeds, single initials on Tabs
export const InfoLinks = styled(Anchor).attrs({
  className:
    "text-xs sm:m-0.5 font-semibold w-auto inline-block border-2 border-indigo-600 md:py-1 md:px-4 px-1 uppercase rounded-full bg-purple-200 hover:bg-indigo-800 hover:text-primary",
})``;

// Grid for App.js
export const Grid = styled.div.attrs({
  className:
    "grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen",
})``;

// Custom button for Tabs.js
export const Button = styled.button.attrs({
  className:
    "md:text-2xl w-5/6 border-l border-r text-l font-black uppercase hover:bg-indigo-800 text-primary font-bold p-2 m-2 rounded bg-indigo-300",
})``;
