import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  overflow: scroll;

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    padding: 10px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column {
    margin-bottom: 30px;
  }
`;
