import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

// Colors match gluestack-ui config.ts CSS variables
// Dark theme uses --color-background-* and --color-typography-* from dark mode
// Light theme uses default React Navigation colors (matches gluestack light mode)

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: '#bababa', // --color-primary-100: 186 186 186
    background: '#121212', // --color-background-0: 18 18 18
    text: '#e5e5e5', // --color-typography-800: 229 229 229
    border: '#747474', // --color-outline-300: 115 116 116
    card: '#272625', // --color-background-50: 39 38 37
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#333333', // --color-primary-500: 51 51 51
    background: '#ffffff', // --color-background-0: 255 255 255
  },
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();
  return colorScheme === 'dark' ? DarkTheme : LightTheme;
}
