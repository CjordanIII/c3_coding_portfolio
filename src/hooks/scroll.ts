import { useRef, useCallback } from 'react';

const useScrollToElement = () => {
  const divRef = useRef();

  const scrollToElement = useCallback(() => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return [divRef, scrollToElement];
};

export default useScrollToElement;


// TODO add this to each segment