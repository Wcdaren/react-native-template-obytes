import * as React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { ArrowRightIcon, Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import type { TxKeyPath } from '@/lib';
import { translate } from '@/lib';

type ItemProps = {
  text: TxKeyPath;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
};

export const Item = ({ text, value, icon, onPress }: ItemProps) => {
  const isPressable = onPress !== undefined;
  return (
    <Pressable
      onPress={onPress}
      pointerEvents={isPressable ? 'auto' : 'none'}
      className="flex-1 flex-row items-center justify-between px-4 py-2"
    >
      <HStack className="items-center">
        {icon && <Box className="pr-2">{icon}</Box>}
        <Text>{translate(text)}</Text>
      </HStack>
      <HStack className="items-center">
        <Text className="text-neutral-600 dark:text-white">{value}</Text>
        {isPressable && (
          <Box className="pl-2">
            <Icon
              as={ArrowRightIcon}
              className="text-neutral-600 dark:text-white"
            />
          </Box>
        )}
      </HStack>
    </Pressable>
  );
};
