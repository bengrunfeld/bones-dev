"use client";
import CheckBox from "@repo/ui/CheckBox";
import RadioButtonGroup from "@repo/ui/RadioButtonGroup";
import Input from "@repo/ui/Input";
import { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "@repo/ui/Button";

const StyledContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
          <Button type="submit">Submit!</Button>
        </div>
      </StyledContainer>
    </form>
  );
}
