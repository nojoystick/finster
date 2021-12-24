import { useState, useEffect } from 'react';

export default function useDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleSizeChange = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleSizeChange);
    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, []);
  return [width, height];
}
