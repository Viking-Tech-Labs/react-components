import { useEffect, useRef, useState } from "react";

import useIsInViewport from "@/lib/hooks/useIsInViewport/useIsInViewport";

const minTickDurationFactor = 0.75;

const NumberCounter = ({
  start = 1,
  end,
  tickDuration = 50,
  delay,
  className,
}: {
  start?: number;
  end: number;
  tickDuration?: number;
  delay?: number;
  className?: string;
}) => {
  const [count, setCount] = useState(start);
  const [delayExisted, setDelayExisted] = useState(true);

  const ref = useRef(null);
  const hasBeenIntersected = useIsInViewport({ ref, triggerOnce: true });

  useEffect(() => {
    if (!delay) return setDelayExisted(false);

    const delayTimer = setTimeout(() => setDelayExisted(false), delay);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [delay]);

  useEffect(() => {
    if (count < end && !delayExisted && hasBeenIntersected) {
      const currentTickDuration = Math.max(
        tickDuration * minTickDurationFactor,
        tickDuration -
          (tickDuration * minTickDurationFactor * (count - start)) /
            (end - start),
      );

      const durationTimer = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, currentTickDuration);

      return () => {
        clearTimeout(durationTimer);
      };
    }
  }, [count, end, start, tickDuration, delayExisted, hasBeenIntersected]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default NumberCounter;
