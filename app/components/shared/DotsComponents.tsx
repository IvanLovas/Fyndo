import React, { useEffect, useRef } from "react";
import anime from "animejs";

interface DotsComponentProps {
  children: React.ReactNode;
}

const DotsComponent: React.FC<DotsComponentProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref to container

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const generateDots = () => {
      const dotSize = 6;
      const spacing = 20;
      const rows = Math.floor(container.clientHeight / spacing);
      const cols = Math.floor(container.clientWidth / spacing);

      if (container.querySelectorAll('.dot').length === 0) {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.top = `${row * spacing}px`;
            dot.style.left = `${col * spacing}px`;

            container.appendChild(dot);
          }
        }
      }
    };

    // Generate dots once when the component mounts
    generateDots();

    // Animate random set of dots every 2 seconds
    const interval = setInterval(() => {
      const dots = document.querySelectorAll('.dot');
      const numberOfBlinks = 15; // Randomly blink 1 to 5 dots each time

      // Randomly shuffle the dots and select the first `numberOfBlinks` dots
      const randomDots = Array.from(dots).sort(() => 0.5 - Math.random()).slice(0, numberOfBlinks);

      randomDots.forEach((dot: Element, index) => {
        const htmlElement = dot as HTMLElement;
      
        // Calculate staggered delay based on 20% of the previous dot's animation
        const staggerDelay = index * 100; // 100ms delay per dot for stagger effect (20% of 500ms)

        // Animate each dot with staggered timing
        anime({
          targets: dot,
          backgroundColor: ['#1D1D1D', '#06E5FF'], // Animate from original color to red
          easing: 'easeInOutQuad',
          duration: 500, // Duration for color change
          delay: staggerDelay, // Delay increases by 20% of the previous animation time
          complete: () => {
            // Revert back to original color after 500ms
            anime({
              targets: dot,
              backgroundColor: ['#06E5FF', '#1D1D1D'],
              easing: 'easeInOutQuad',
              duration: 500, // Duration for revert
            });
          }
        });
      });
    }, 500); // Change color every 2 seconds

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef} // Set the ref to container
      className="dotted-background flex-40 py-20"
    >
      <div style={{ position: "relative", zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </div>
    </div>
  );
};

export default DotsComponent;
