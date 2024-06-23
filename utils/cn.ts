type ClassValue =
  | string
  | undefined
  | null
  | boolean
  | { [key: string]: boolean };

function cn(...classes: ClassValue[]): string {
  return classes
    .reduce<string[]>((acc, cls) => {
      if (!cls) return acc;

      if (typeof cls === "string") {
        acc.push(cls);
      } else if (typeof cls === "object") {
        for (const key in cls) {
          if (cls[key]) {
            acc.push(key);
          }
        }
      }

      return acc;
    }, [])
    .join(" ");
}

export default cn;
