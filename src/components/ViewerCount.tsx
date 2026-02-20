import { useState, useEffect, useRef } from 'react';

const ViewerCount = () => {
  const [count, setCount] = useState(693);
  const reachedMax = useRef(false);

  useEffect(() => {
    let target = 693;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      setCount(prev => {
        if (!reachedMax.current) {
          const targetStep = Math.floor(Math.random() * 5) + 2;
          target = Math.min(2938, target + targetStep);
          if (Math.random() < 0.10 && prev > 700) {
            const dip = Math.floor(Math.random() * 3) + 1;
            return Math.max(693, prev - dip);
          }
          if (prev < target) {
            return prev + 1;
          }
          if (target >= 2938) {
            reachedMax.current = true;
          }
          return prev;
        }
        const change = Math.random() < 0.5 ? 1 : -1;
        return Math.max(2938, Math.min(3422, prev + change));
      });

      const roll = Math.random();
      let delay: number;
      if (roll < 0.08) {
        delay = 800 + Math.random() * 1700;
      } else if (roll < 0.3) {
        delay = 30 + Math.random() * 60;
      } else {
        delay = 80 + Math.random() * 150;
      }
      timeout = setTimeout(tick, delay);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 py-4 text-sm md:text-base">
      <span className="viewer-dot w-2.5 h-2.5 rounded-full inline-block" />
      <span className="font-medium">
        {count} People are watching now…
      </span>
    </div>
  );
};

export default ViewerCount;
