// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObject(value: any): value is { [key: string]: string } {
  return value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0;
}

export const isValidArray = <T>(arr: T[]): boolean => {
  return arr && Array.isArray(arr) && arr.length > 0;
};
