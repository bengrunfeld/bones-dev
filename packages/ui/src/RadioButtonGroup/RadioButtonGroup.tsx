import { ReactNode } from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export type RadioButtonGroupProps = {
  groupLabel: string | ReactNode;
  groupName: string;
  radioButtons: RadioButtonProps[];
};

const RadioButtonGroup = ({
  radioButtons,
  groupLabel,
  groupName,
}: RadioButtonGroupProps) => (
  <div
    role="radiogroup"
    aria-labelledby={`${groupName}-label`}
    className="radio-button-group"
  >
    <label id={`${groupName}-label`} className="radio-group-label">
      {groupLabel}
    </label>
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
