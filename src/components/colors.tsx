import React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

import { Title } from './title';

// Color palette for the style guide demo
// These are representative hex values for the CSS variable-based theme colors
const colors = {
  primary: {
    '0': '#b3b3b3',
    '50': '#999999',
    '100': '#808080',
    '200': '#737373',
    '300': '#666666',
    '400': '#525252',
    '500': '#333333',
    '600': '#292929',
    '700': '#1f1f1f',
    '800': '#0d0d0d',
    '900': '#0a0a0a',
    '950': '#080808',
  },
  secondary: {
    '0': '#fdfdfd',
    '50': '#fbfbfb',
    '100': '#f6f6f6',
    '200': '#f2f2f2',
    '300': '#ededed',
    '400': '#e6e6e7',
    '500': '#d9d9db',
    '600': '#c6c7c7',
    '700': '#bdbdbd',
    '800': '#b1b1b1',
    '900': '#a5a4a4',
    '950': '#9d9d9d',
  },
  error: {
    '0': '#fee9e9',
    '50': '#fee2e2',
    '100': '#fecaca',
    '200': '#fca5a5',
    '300': '#f87171',
    '400': '#ef4444',
    '500': '#e63535',
    '600': '#dc2626',
    '700': '#b91c1c',
    '800': '#991b1b',
    '900': '#7f1d1d',
    '950': '#531313',
  },
  success: {
    '0': '#e4fff4',
    '50': '#caffe8',
    '100': '#a2f1c0',
    '200': '#84d3a2',
    '300': '#66b584',
    '400': '#489766',
    '500': '#348352',
    '600': '#2a7948',
    '700': '#206f3e',
    '800': '#166534',
    '900': '#14532d',
    '950': '#1b3224',
  },
  warning: {
    '0': '#fff9f5',
    '50': '#fff4ec',
    '100': '#ffe7d5',
    '200': '#fecdaa',
    '300': '#fdad74',
    '400': '#fb954b',
    '500': '#e77828',
    '600': '#d76c1f',
    '700': '#b45a1a',
    '800': '#824417',
    '900': '#6c3813',
    '950': '#542d12',
  },
  info: {
    '0': '#ecf8fe',
    '50': '#c7ebfc',
    '100': '#a2ddfa',
    '200': '#7ccff8',
    '300': '#57c2f6',
    '400': '#32b4f4',
    '500': '#0da6f2',
    '600': '#0b8dcd',
    '700': '#0973a8',
    '800': '#075a83',
    '900': '#05405d',
    '950': '#032638',
  },
  typography: {
    '0': '#fefeff',
    '50': '#f5f5f5',
    '100': '#e5e5e5',
    '200': '#dbdbdc',
    '300': '#d4d4d4',
    '400': '#a3a3a3',
    '500': '#8c8c8c',
    '600': '#737373',
    '700': '#525252',
    '800': '#404040',
    '900': '#262627',
    '950': '#171717',
  },
  background: {
    '0': '#ffffff',
    '50': '#f6f6f6',
    '100': '#f2f1f1',
    '200': '#dcdbdb',
    '300': '#d5d4d4',
    '400': '#a2a3a3',
    '500': '#8e8e8e',
    '600': '#747474',
    '700': '#535252',
    '800': '#414040',
    '900': '#272625',
    '950': '#121212',
  },
} as const;

type ColorName = keyof typeof colors;

export const Colors = () => {
  return (
    <>
      <Title text="Colors" />
      {(Object.keys(colors) as ColorName[]).map((name) => (
        <Color name={name} key={name} />
      ))}
    </>
  );
};

const Color = ({ name }: { name: ColorName }) => {
  const colorGroup = colors[name];
  return (
    <VStack className="pt-2">
      <Text className="font-medium">{name.toUpperCase()}</Text>
      <HStack className="flex-wrap content-between justify-around">
        {Object.entries(colorGroup).map(([key, value]) => {
          return <ColorCard key={`${name}-${key}`} value={key} color={value} />;
        })}
      </HStack>
    </VStack>
  );
};

const ColorCard = ({ color, value }: { value: string; color: string }) => {
  return (
    <Box className="flex-1">
      <Box
        className="h-14 w-full rounded-sm"
        style={{ backgroundColor: color }}
      />
      <Text className="text-sm">{value}</Text>
    </Box>
  );
};
