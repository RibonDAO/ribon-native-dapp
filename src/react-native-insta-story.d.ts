import React from "react";

export interface Props {
  data: any[];
  duration: number;
  onStart: (item: any) => void;
  onClose: (item: any) => void;
}

declare const ReactInstaStoryComponent: React.SFC<Props>;

export default ReactInstaStoryComponent;
