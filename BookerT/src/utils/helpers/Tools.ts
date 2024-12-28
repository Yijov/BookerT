export const cn = (names: string[]) => names.join(" ");

export function capitalizeFirstLetter(val:string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
export const elipseString = (input: string, maxLength: number): string => {
    if (input.length <= maxLength) {
      return input;
    } else {
      return input.substring(0, maxLength) + "...";
    }
  };
  
  export function getDistinctValues<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }