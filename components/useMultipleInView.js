import React, { useRef, useMemo } from "react";
import { useInView } from "react-intersection-observer";

export function useMultipleInView(count, options) {
  // Create an array of refs
  const refs = useRef([...Array(count)].map(() => React.createRef()));

  // Use `useMemo` to initialize the `useInView` hooks only when `options` changes
  const views = useMemo(() => {
    return refs.current.map((ref) => {
      // useInView must be called with a configuration that includes the ref
      const { ref: inViewRef, inView } = useInView({
        ...options,
        skip: !ref.current, // Optionally skip if no ref is attached yet
      });

      // Attach the inViewRef to the ref object
      ref.current = inViewRef;

      return { ref: inViewRef, inView };
    });
  }, [count, options]);

  return views;
}
