import styled from "styled-components";
import { Link as Anchor } from "react-router-dom";

// Sidebar anchor tags / routes
export const Link = styled(Anchor).attrs({
  className:
    "text-primary md:text-3xl text-xl font-black m-2 lowercase hover:text-primaryDarker",
})``;
