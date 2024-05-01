import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export function UseMultipleView(count, options) {
  const refs = useRef([...Array(count)].map(() => React.createRef()));

  // Apply `useInView` to each ref
  const inViews = refs.current.map((ref) =>
    useInView({
      ...options,
      ref: ref,
    })
  );

  return inViews;
}
