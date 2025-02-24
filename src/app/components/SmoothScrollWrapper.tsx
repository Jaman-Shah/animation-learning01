import ReactLenis from "lenis/react";
import React, { ReactNode } from "react";

const SmoothScrollWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollWrapper;
