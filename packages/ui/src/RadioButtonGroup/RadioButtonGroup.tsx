import { ReactNode } from "react";

export type RadioButtonProps = {
  value: string;
  labelText?: string | ReactNode;
  groupName: string;
};

const RadioButton = ({ value, labelText, groupName }: RadioButtonProps) => {
  const radioId = `radio-${value}`;

  return (
    <div>
      <label htmlFor={radioId}>
        <input id={radioId} name={groupName} type="radio" value={value} />
        <span>{labelText}</span>
      </label>
    </div>
  );
};

export type RadioButtonGroupProps = {
  groupLabel: string;
  groupName: string;
  radioButtons: RadioButtonProps[];
};

const RadioButtonGroup = ({
  radioButtons,
  groupLabel,
  groupName,
}: RadioButtonGroupProps) => (
  <div role="radiogroup" aria-labelledby={`${groupName}-label`}>
    <label id={`${groupName}-label`}>{groupLabel}</label>
    {radioButtons.map((item) => (
      <RadioButton
        key={item.value}
        value={item.value}
        labelText={item?.labelText}
        groupName={groupName}
      />
    ))}
  </div>
);

export default RadioButtonGroup;
