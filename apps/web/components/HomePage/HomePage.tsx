"use client";
import CheckBox from "@repo/ui/CheckBox";
import RadioButtonGroup from "@repo/ui/RadioButtonGroup";
import Input from "@repo/ui/Input";
import { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "@repo/ui/Button";
import CustomSelect, { Option } from "@repo/ui/CustomSelect";
import Select from "@repo/ui/Select";

const StyledContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledSelect = styled(CustomSelect)`
  ul {
    list-style: none;
  }

  .select-button {
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }

  .select-dropdown {
    margin-top: 4px;
    padding: 0;
    list-style: none;
    border: 1px solid #ccc;
    max-height: 200px;
    overflow-y: auto;
  }

  .select-option {
    padding: 8px 16px;
    cursor: pointer;
  }

  .select-option.focused {
    background-color: #eee;
  }

  .select-option[aria-selected="true"] {
    background-color: #d1e7dd;
  }
`;

export default function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: FieldValues) => {
    console.log("SUBMIT", data);
  };

  const options: Option[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  const handleChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <StyledContainer>
        <Input
          labelText="First Name"
          legendText="Enter your first name"
          name="first-name"
          register={register}
        />

        <div>
          <CheckBox
            name="agree-to-terms"
            register={register}
            labelText="This is a checkbox"
            errorMessage="This field is required"
            error={errors?.["agree-to-terms"]}
            required
          />
        </div>
        <div>
          <RadioButtonGroup
            radioButtons={[
              {
                value: "male",
                labelText: "Male",
                groupName: "gender",
                register,
              },
              {
                value: "female",
                labelText: "Female",
                groupName: "gender",
                register,
              },
            ]}
            groupLabel="Bens Radio Group"
            groupName="Bens Radio Group Name"
          />
        </div>

        <div>
          <StyledSelect
            options={options}
            label="Fruits"
            onChange={handleChange}
            name="fruits"
          />
        </div>

        <div>
          <Select
            register={register}
            options={options}
            label="Fresh Fruits"
            name="freshFruits"
          />
        </div>

        <div>
          <Button type="submit">Submit!</Button>
        </div>
      </StyledContainer>
    </form>
  );
}
