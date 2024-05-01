import { useInView } from "react-intersection-observer";

export function UseMultipleView(count, options) {
  const refs = [];
  for (let i = 0; i < count; i++) {
    const { ref, inView } = useInView(options);
    refs.push({ ref, inView });
  }
  return refs;
}
