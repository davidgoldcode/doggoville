import styled from "styled-components";
import { Link as Anchor } from "react-router-dom";

// Sidebar anchor tags / routes
export const Link = styled(Anchor).attrs({
  className:
    "text-primary lg:text-3xl md:text-2xl text-l font-black m-2 lowercase hover:text-primaryDarker",
})``;

// Lists displaying breeds, subbreeds, single initials on Tabs
export const InfoLinks = styled(Anchor).attrs({
  className:
    "text-xs sm:m-0.5 font-semibold w-auto inline-block border-2 border-indigo-600 md:py-1 md:px-4 px-1 uppercase rounded-full bg-purple-200 hover:bg-indigo-800 hover:text-primary",
})``;
