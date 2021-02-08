import styled from "styled-components";

// Component Div
export const Div = styled.div.attrs({
  className:
    "border-b md:block hidden border-gray-200 flex items-center pt-4 justify-between sm:mb-10 sm:mx-0 sm:px-0",
})``;

// Search Button
export const SearchButton = styled.button.attrs({
  className:
    "group leading-8 flex items-center space-x-3 sm:space-x-4 hover:text-purple-600 transition-colors duration-200 w-full py-2",
})``;

// Span
export const Span = styled.span.attrs({
  className:
    "hidden sm:block text-sm leading-5 p-2 border border-gray-300 rounded-md",
})``;
