import React from 'react';

import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

import { Title } from './title';

export const Buttons = () => {
  return (
    <>
      <Title text="Buttons" />
      <VStack>
        <HStack className="flex-wrap">
          <Button size="sm" className="mr-2">
            <ButtonText>small</ButtonText>
          </Button>
          <Button size="sm" className="mr-2 min-w-[60px]">
            <ButtonSpinner />
          </Button>
          <Button size="sm" action="secondary" className="mr-2">
            <ButtonText>small</ButtonText>
          </Button>
          <Button size="sm" variant="outline" className="mr-2">
            <ButtonText>small</ButtonText>
          </Button>
          <Button size="sm" action="negative" className="mr-2">
            <ButtonText>small</ButtonText>
          </Button>
          <Button size="sm" action="default" className="mr-2">
            <ButtonText>small</ButtonText>
          </Button>
          <Button size="sm" isDisabled className="mr-2">
            <ButtonText>small</ButtonText>
          </Button>
        </HStack>
        <Button>
          <ButtonText>Default Button</ButtonText>
        </Button>
        <Button action="secondary">
          <ButtonText>Secondary Button</ButtonText>
        </Button>
        <Button variant="outline">
          <ButtonText>Outline Button</ButtonText>
        </Button>
        <Button action="negative">
          <ButtonText>Destructive Button</ButtonText>
        </Button>
        <Button action="default">
          <ButtonText>Ghost Button</ButtonText>
        </Button>
        <Button>
          <ButtonSpinner />
          <ButtonText>Button</ButtonText>
        </Button>
        <Button variant="outline">
          <ButtonSpinner />
          <ButtonText>Button</ButtonText>
        </Button>
        <Button isDisabled>
          <ButtonText>Default Button Disabled</ButtonText>
        </Button>
        <Button isDisabled action="secondary">
          <ButtonText>Secondary Button Disabled</ButtonText>
        </Button>
      </VStack>
    </>
  );
};
