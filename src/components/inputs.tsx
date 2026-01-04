import React from 'react';

import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { HStack } from '@/components/ui/hstack';
import { CheckIcon, ChevronDownIcon, CircleIcon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@/components/ui/radio';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

import { Title } from './title';

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Inputs = () => {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <>
      <Title text="Form" />
      <VStack className="gap-4">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Default</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Lorem ipsum dolor sit amet" />
          </Input>
        </FormControl>

        <FormControl isInvalid>
          <FormControlLabel>
            <FormControlLabelText>Error</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Enter text" />
          </Input>
          <FormControlError>
            <FormControlErrorText>This is a message error</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Focused</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Enter text" />
          </Input>
        </FormControl>

        <SelectExample value={value} onSelect={setValue} />
        <CheckboxExample />
        <RadioExample />
        <SwitchExample />
      </VStack>
    </>
  );
};

interface SelectExampleProps {
  value: string | undefined;
  onSelect: (value: string | undefined) => void;
}

const SelectExample = ({ value, onSelect }: SelectExampleProps) => {
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Select</FormControlLabelText>
      </FormControlLabel>
      <Select selectedValue={value} onValueChange={(val) => onSelect(val)}>
        <SelectTrigger>
          <SelectInput placeholder="Select option" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};

const CheckboxExample = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      value="checkbox"
      isChecked={checked}
      onChange={(isSelected) => setChecked(isSelected)}
      aria-label="accept terms of condition"
      className="pb-2"
    >
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>checkbox</CheckboxLabel>
    </Checkbox>
  );
};

const RadioExample = () => {
  const [selected, setSelected] = React.useState<string>('');
  return (
    <RadioGroup value={selected} onChange={setSelected} className="pb-2">
      <Radio value="radio" aria-label="radio button">
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>radio button</RadioLabel>
      </Radio>
    </RadioGroup>
  );
};

const SwitchExample = () => {
  const [active, setActive] = React.useState(false);
  return (
    <HStack className="items-center gap-2 pb-2">
      <Switch
        value={active}
        onValueChange={setActive}
        accessibilityLabel="switch"
      />
      <Text>switch</Text>
    </HStack>
  );
};
