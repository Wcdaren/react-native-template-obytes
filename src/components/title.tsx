import * as React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';

type Props = {
  text: string;
};
export const Title = ({ text }: Props) => {
  return (
    <HStack className="items-center justify-center py-4 pb-2">
      <Text className="pr-2 text-2xl">{text}</Text>
      <Box className="h-[2px] flex-1 bg-neutral-300" />
    </HStack>
  );
};
