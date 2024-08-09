import { useLayoutEffect, useState } from "react";

export default function useWindowSizeEffect(callback: () => any, initialResult: any = null): any {
  const [result, setResult] = useState<any>(initialResult);

  useLayoutEffect(() => {
    function updateSize(): void {
      setResult(callback());
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
}
