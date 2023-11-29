import { useEffect, useMemo, useState } from "react";

type Props = {
  ref: any;
  config?: IntersectionObserverInit;
  triggerOnce?: boolean;
};

export default function useIsInViewport({
  ref,
  config,
  triggerOnce = false,
}: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && triggerOnce) {
          observer.disconnect();
        }
      }, config),
    [triggerOnce],
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
