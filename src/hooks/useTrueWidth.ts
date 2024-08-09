import { useMemo } from "react";

export default function useTrueWidth(width: string | number): string | number {
  const trueWidth = useMemo<string | number>(() => {
    if (typeof width === "string" && width.includes("%")) return "100%";
    return width;
  }, [width]);

  return trueWidth;
}
