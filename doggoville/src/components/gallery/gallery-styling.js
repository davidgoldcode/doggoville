import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  overflow: scroll;

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    padding: 10px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }
`;
