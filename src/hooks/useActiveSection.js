import { useState, useEffect } from 'react';

// Tracks which CV section currently crosses the upper-middle band of the
// viewport, so the nav can highlight it with the animated indicator.
export const useActiveSection = (sectionKeys) => {
  const [active, setActive] = useState(sectionKeys[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.dataset.sectionKey);
        }
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );

    sectionKeys.forEach((key) => {
      const el = document.getElementById(`section-${key}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionKeys]);

  return active;
};
