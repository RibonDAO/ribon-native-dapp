import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIconOff = () => (
  <Svg width={24} height={24}>
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#867F70",
        fillOpacity: 1,
      }}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 2a7.988 7.988 0 0 1 6.84 3.879c-.43.07-.88.121-1.34.121a7.988 7.988 0 0 1-6.84-3.879C11.09 4.051 11.54 4 12 4ZM8.078 5.031A8.036 8.036 0 0 1 4.422 9.47 8.049 8.049 0 0 1 8.078 5.03ZM12 20c-4.41 0-8-3.59-8-8 0-.05.012-.102.012-.148A10.052 10.052 0 0 0 9.75 6.3 9.947 9.947 0 0 0 17.5 10c.75 0 1.469-.09 2.172-.238A7.95 7.95 0 0 1 20 12c0 4.41-3.59 8-8 8Zm0 0"
    />
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#867F70",
        fillOpacity: 1,
      }}
      d="M8.996 14.25c.691 0 1.25-.559 1.25-1.25s-.559-1.25-1.25-1.25a1.251 1.251 0 0 0 0 2.5ZM14.996 14.25c.691 0 1.25-.559 1.25-1.25s-.558-1.25-1.25-1.25c-.691 0-1.25.559-1.25 1.25s.559 1.25 1.25 1.25Zm0 0"
    />
  </Svg>
);

export default ProfileIconOff;