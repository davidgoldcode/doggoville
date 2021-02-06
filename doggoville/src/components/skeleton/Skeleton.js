import React from "react";
import ContentLoader from "react-content-loader";
import { Skeleton } from "./skeleton-styling";

const Grid = (props) => {
  return (
    <ContentLoader viewBox="0 0" className="h-screen w-full" {...props}>
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  );
};

Grid.metadata = {
  name: "baptiste fkt",
  github: "baptistefkt",
  description: "Three column grid layout",
  filename: "Grid",
};

export default Grid;
