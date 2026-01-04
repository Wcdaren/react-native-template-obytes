import React from 'react';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

import { Title } from './title';

export const Typography = () => {
  return (
    <>
      <Title text="Typography" />
      <VStack className="mb-4">
        <Heading size="3xl" className="tracking-tight">
          H1: Lorem ipsum dolor sit
        </Heading>
        <Heading size="2xl">H2: Lorem ipsum dolor sit</Heading>
        <Heading size="xl">H3: Lorem ipsum dolor sit</Heading>
        <Heading size="lg">H4: Lorem ipsum dolor sit</Heading>
        <Text size="md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quasi
          aut, expedita tempore ratione quidem in, corporis quia minus et
          dolorem sunt temporibus iusto consequatur culpa. Omnis sequi debitis
          recusandae?
        </Text>
      </VStack>
    </>
  );
};
