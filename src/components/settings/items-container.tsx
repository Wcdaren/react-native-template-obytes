import React from 'react';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import type { TxKeyPath } from '@/lib';
import { translate } from '@/lib';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <>
      {title && <Text className="pb-2 pt-4 text-lg">{translate(title)}</Text>}
      {
        <Box className="rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
          {children}
        </Box>
      }
    </>
  );
};
