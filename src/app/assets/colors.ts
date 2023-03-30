export const darkGrey = '#2d2d2d';
export const grey = '#414141';
export const lightGrey = '#414141';
export const yellow = '#e1ff00';
export const orange = '#f58709';
export const lightBlue = '#00C1EC';
export const blue = '#0674f1';
export const pink = '#f81285';
export const red = '#f81225';
export const newYellow = '#F7AF24';
export const white = '#f1f2e7';
export const gradient = (color1: string, color2: string) => {
  return `linear-gradient(90deg, ${color1}, ${color2})`;
};
export const gradientBg = (
  orientation: string,
  color1: string,
  color2: string
) => {
  return `linear-gradient(${orientation}, ${color1}, ${color2})`;
};
export const textShadow = `1px 1px 3px ${orange}`;
