import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/components/cover';
import { FocusAwareStatusBar } from '@/components/focus-aware-status-bar';
import { Button, ButtonText } from '@/components/ui/button';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useIsFirstTime } from '@/lib/hooks';

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <VStack className="flex h-full items-center justify-center">
      <FocusAwareStatusBar />
      <VStack className="w-full flex-1">
        <Cover />
      </VStack>
      <VStack className="justify-end">
        <Text className="my-3 text-center text-5xl font-bold">
          Obytes Starter
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to build your mobile app
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">
          🚀 Production-ready{' '}
        </Text>
        <Text className="my-1 text-left text-lg">
          🥷 Developer experience + Productivity
        </Text>
        <Text className="my-1 text-left text-lg">
          🧩 Minimal code and dependencies
        </Text>
        <Text className="my-1 text-left text-lg">
          💪 well maintained third-party libraries
        </Text>
      </VStack>
      <SafeAreaView className="mt-6">
        <Button
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        >
          <ButtonText>Let's Get Started</ButtonText>
        </Button>
      </SafeAreaView>
    </VStack>
  );
}
