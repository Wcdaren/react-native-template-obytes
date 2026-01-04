import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import { Card } from '@/components/card';
import { EmptyList } from '@/components/empty-list';
import { FocusAwareStatusBar } from '@/components/focus-aware-status-bar';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function Feed() {
  const { data, isPending, isError } = usePosts();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <Card {...item} />,
    []
  );

  if (isError) {
    return (
      <Box>
        <Text> Error Loading data </Text>
      </Box>
    );
  }
  return (
    <Box className="flex-1">
      <FocusAwareStatusBar />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      />
    </Box>
  );
}
