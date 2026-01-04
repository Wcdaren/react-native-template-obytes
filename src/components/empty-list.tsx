import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

type EmptyListProps = {
  isLoading?: boolean;
};

export const EmptyList = ({ isLoading = false }: EmptyListProps) => {
  return (
    <Box className="min-h-[200px] flex-1 items-center justify-center">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className="text-gray-500">No data available</Text>
      )}
    </Box>
  );
};
