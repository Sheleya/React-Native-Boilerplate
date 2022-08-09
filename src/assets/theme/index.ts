import { ITheme } from './lightTheme';
import { palette } from './palette';

export const hex2rgba = (hex: string, alpha: number): string => {
  const splittedHex = hex.match(/\w\w/g);

  if (splittedHex) {
    const [r, g, b] = splittedHex.map(x => parseInt(x, 16));

    return `rgba(${r},${g},${b},${alpha || 1})`;
  }

  return hex;
};

export const theme: ITheme = {
  ...palette,
};
