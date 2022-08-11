import { IconPlus } from "@tabler/icons";
import { animate } from "animation";
import Button from "components/atoms/Button";
import Error from "components/atoms/Error";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import { Flex, FormControl } from "components/atoms/shared";
import { useNewUser } from "context/NewUserContext";
import { useSteps } from "context/StepsContext";
import { useDisabledButton } from "pages/hooks/useDisabledButton";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUserTable } from "types";
import { Container, EmptyState, Grid, Title, Wrapper } from "./shared";

const Education = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserTable>();
  const { fields, append } = useFieldArray({
    control,
    name: "educations",
  });

  const navigate = useNavigate();
  const disabled = useDisabledButton(fields);
  const { setSteps } = useSteps();
  const { setNewUser, newUser } = useNewUser();

  const onSubmit: SubmitHandler<IUserTable> = (data) => {
    setSteps((prev) =>
      prev.map((step) => (step.pathname.includes("education") ? { ...step, status: "done" } : step))
    );
    setNewUser((prev) => ({ ...prev, ...data }));

    navigate("/new/work-experiences");
  };

  const onNewField = () => {
    append({ data: "" });
  };

  useEffect(() => {
    if ("educations" in newUser && Object.values(newUser.educations).length > 0) {
      const educations = newUser.educations as Record<number, Record<string, string>>[];
      for (let i = 0; i < educations.length; i += 1) {
        append({ data: educations[i]["data" as unknown as keyof typeof educations[typeof i]] });
      }
    }
  }, []);

  return (
    <Container
      onSubmit={handleSubmit(onSubmit)}
      variants={animate}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Wrapper>
        <Title>Education</Title>
        <Button
          type="button"
          size="md"
          variant="primary"
          onClick={onNewField}
          css="gap: 0.5rem; padding-bottom: 1px;"
        >
          <IconPlus size={20} />
          New Education
        </Button>
      </Wrapper>
      <Grid>
        {fields.length === 0 && <EmptyState>Put at least one input</EmptyState>}
        {fields.map((_, idx) => (
          <FormControl key={idx}>
            <Label htmlFor="education">Education</Label>
            <Input
              id="education"
              elementSize="lg"
              variant="primary"
              aria-invalid={
                errors?.educations && errors?.educations[idx]?.data?.type === ("required" as any)
              }
              aria-errormessage={`education-${idx}-error`}
              {...register(`educations[${idx}].data`, { required: true })}
            />
            {errors?.educations && errors.educations[idx]?.data?.type === ("required" as any) && (
              <Error id={`education-${idx}-error`}>This field is required</Error>
            )}
          </FormControl>
        ))}
      </Grid>
      <Flex justifyContent="flex-end" gap="1rem" css="width: 100%; margin-top: 2rem;">
        <Button type="button" size="sm" variant="secondary" onClick={() => navigate(-1)}>
          Prev
        </Button>
        <Button type="submit" size="sm" variant="secondary" disabled={disabled}>
          Next
        </Button>
      </Flex>
    </Container>
  );
};

export default Education;
