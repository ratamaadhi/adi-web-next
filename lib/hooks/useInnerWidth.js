import { useEffect, useState } from 'react';

const useInnerWidth = () => {
  const [windowWidth, setWindowWidth] = useState('');
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow, true);

    return () => window.removeEventListener('resize', handleResizeWindow, true);
  }, [windowWidth]);

  function handleResizeWindow() {
    setWindowWidth(window.innerWidth);
  }

  return { windowWidth };
};

export default useInnerWidth;
