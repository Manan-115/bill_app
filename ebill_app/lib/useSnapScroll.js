import { useEffect, useRef } from "react";
import { useScroll, useSpring, useMotionValue, animate } from "framer-motion";

/**
 * Custom hook to provide snap-to-state behavior for scroll-based animations.
 * 
 * @param {Object} options
 * @param {number} options.threshold - The scrollY threshold to decide between expanded and collapsed states.
 * @param {number} options.expandedValue - The scrollY value for the fully expanded state (usually 0).
 * @param {number} options.collapsedValue - The scrollY value for the fully collapsed state.
 * @param {Object} options.springConfig - Framer Motion spring configuration.
 */
export function useSnapScroll({
  threshold = 80,
  expandedValue = 0,
  collapsedValue = 160,
  springConfig = { stiffness: 100, damping: 20, mass: 1.8 }
}) {
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY, springConfig);
  const isSnapping = useRef(false);
  const scrollTimeout = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isSnapping.current) return;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const currentY = window.scrollY;
        
        // Determine direction
        const delta = currentY - lastY.current;
        lastY.current = currentY;

        if (currentY > 0 && currentY < collapsedValue) {
          let targetY;
          
          if (delta > 0) {
            // Scrolling down: need to cross threshold to stay collapsed
            targetY = currentY > threshold ? collapsedValue : expandedValue;
          } else {
            // Scrolling up: stay expanded unless we scrolled very little back
            targetY = currentY < threshold ? expandedValue : collapsedValue;
          }

          if (currentY !== targetY) {
            isSnapping.current = true;
            
            animate(currentY, targetY, {
              type: "spring",
              ...springConfig,
              onUpdate: (latest) => {
                window.scrollTo(0, latest);
              },
              onComplete: () => {
                isSnapping.current = false;
              }
            });
          }
        }
      }, 150); // Debounce time
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [threshold, expandedValue, collapsedValue, springConfig]);

  return { scrollY, springScrollY };
}
