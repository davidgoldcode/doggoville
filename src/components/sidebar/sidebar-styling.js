import styled from "styled-components";
import { ImgWithFallback } from "../../utils/ImgWithFallback";

// Header
export const Header = styled.header.attrs({
  className:
    "col-start-1 md:col-span-1 md:h-98 h-5/6 bg-indigo-600 md:self-center md:mx-2 md:rounded-2xl flex flex-col items-center justify-around",
})``;

export const Img = styled(ImgWithFallback).attrs({
  className: "w-1/2 md:block hidden p-2 my-0 mx-auto",
})``;

// Section for nav links
export const Section = styled.section.attrs({
  className: "flex flex-col md:h-1/2 items-center",
})``;

// Mailto anchor
export const Anchor = styled.a.attrs({
  className:
    "text-primary lg:text-2xl md:text-xl text-l font-black m-2 lowercase hover:text-primaryDarker",
})``;

// Footer
export const Footer = styled.footer.attrs({
  className: "flex flex-col items-center justify-around",
})``;

// H2
export const H2 = styled.h2.attrs({
  className:
    "text-primary lg:text-2xl md:text-xl text-l font-black m-2 lowercase hover:text-primaryDarker",
})``;

// Modal triggering Button
export const Button = styled.button.attrs({
  className:
    "text-primary lg:text-2xl md:text-xl text-l font-black m-2 lowercase hover:text-primaryDarker",
})``;
