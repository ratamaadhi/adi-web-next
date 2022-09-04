import { useEffect, useState } from 'react';

const useScroll = ({ scrollTo = 'scrollTop', limit = 0 }) => {
  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    document.body[scrollTo] > limit ||
    document.documentElement[scrollTo] > limit
      ? setScroll(true)
      : setScroll(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return { scroll };
};

export default useScroll;
