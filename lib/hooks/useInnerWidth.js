import { useEffect, useState } from "react";

const useInnerWidth = () => {
  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
  }, [windowWidth]);

  function handleResizeWindow(e) {
    setWindowWidth(window.innerWidth);
  }

  return { windowWidth };
};

export default useInnerWidth;
