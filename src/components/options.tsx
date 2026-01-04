import React, { useCallback, useState } from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';
import { CheckIcon, Icon } from '@/components/ui/icon';

export type OptionType = {
  label: string;
  value: string;
};

type OptionsProps = {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  value?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const present = useCallback(() => {
    setIsOpen(true);
  }, []);

  const dismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, present, dismiss };
};

export const Options = ({
  options,
  onSelect,
  value,
  isOpen,
  onClose,
}: OptionsProps) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        {options.map((option) => (
          <ActionsheetItem key={option.value} onPress={() => onSelect(option)}>
            <ActionsheetItemText>{option.label}</ActionsheetItemText>
            {value === option.value && (
              <Icon as={CheckIcon} className="text-primary-500" size="md" />
            )}
          </ActionsheetItem>
        ))}
      </ActionsheetContent>
    </Actionsheet>
  );
};
