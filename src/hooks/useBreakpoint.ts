"use client";

import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<
    "mobile" | "tablet" | "desktop"
  >();

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 600) {
      setBreakpoint("mobile");
    } else if (width < 1280) {
      setBreakpoint("tablet");
    } else {
      setBreakpoint("desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi hàm khi component được mount để thiết lập breakpoint ban đầu

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
