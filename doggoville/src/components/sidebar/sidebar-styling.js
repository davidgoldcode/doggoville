import styled from "styled-components";

// Header
export const Header = styled.header.attrs({
  className:
    "col-start-1 md:col-span-1 md:h-98 h-5/6 bg-indigo-600 md:self-center md:mx-2 md:rounded-2xl flex flex-col items-center justify-around",
})``;

// Section for nav links
export const Section = styled.section.attrs({
  className: "flex flex-col md:h-1/2 items-center",
})``;

// Mailto anchor
export const Anchor = styled.a.attrs({
  className:
    "text-primary lg:text-3xl md:text-2xl text-l font-black m-2 lowercase",
})``;

// Footer
export const Footer = styled.footer.attrs({
  className: "flex flex-col items-center justify-around",
})``;
