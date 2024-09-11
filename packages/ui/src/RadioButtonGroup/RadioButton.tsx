import { ReactNode } from "react";

export type RadioButtonProps = {
  value: string;
  labelText?: string | ReactNode;
  groupName: string;
};

const RadioButton = ({ value, labelText, groupName }: RadioButtonProps) => {
  const radioId = `radio-${value}`;

  return (
    <div className="radio-button">
      <label htmlFor={radioId} className="radio-button-label">
        <input
          id={radioId}
          name={groupName}
          type="radio"
          value={value}
          className="radio-button-input"
        />
        <span className="radio-button-label-text">{labelText}</span>
      </label>
    </div>
  );
};

export default RadioButton;
