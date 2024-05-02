import { useRef, useMemo } from "react";
import { useInView } from "react-intersection-observer";

export function UseMultipleView(maxCount, options) {
  const refs = useRef([...Array(maxCount)].map(() => React.createRef()));

  const views = useMemo(() => {
    return refs.current.map((ref) =>
      useInView({
        ...options,
        ref: ref.current,
      })
    );
  }, [options]); // dependencies should include any dynamic values from `options`

  return views;
}
