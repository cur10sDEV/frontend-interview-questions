import { useEffect, useRef } from "react";

export function useCustomMemo<T>(
  callback: (...args: unknown[]) => T,
  deps: readonly unknown[]
): T {
  // to hold the memoized value
  const memoizedRef = useRef<{ value: T; deps: readonly unknown[] }>(null);

  // first time call or deps changes
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: callback(),
      deps: deps,
    };
  }

  // cleanup of values after unmount
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  // return memoized value
  return memoizedRef.current.value;
}

function areEqual(
  prevDeps: readonly unknown[],
  currentDeps: readonly unknown[]
) {
  if (!prevDeps || !currentDeps) return false;

  if (prevDeps.length !== currentDeps.length) return false;

  // go over every dependency and check for equality
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== currentDeps[i]) return false;
  }

  return true;
}
