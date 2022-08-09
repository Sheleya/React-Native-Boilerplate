import { ITheme } from '@assets/theme/lightTheme';

declare module '*.png';

declare module '@react-navigation/native' {
  export function useTheme(): ITheme;
}
