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

const WorkExperience = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserTable>();
  const { fields, append } = useFieldArray({
    control,
    name: "experiences",
  });
  const navigate = useNavigate();
  const disabled = useDisabledButton(fields);
  const { setNewUser, newUser } = useNewUser();

  const { setSteps } = useSteps();

  const onSubmit: SubmitHandler<IUserTable> = (data) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.pathname.includes("work-experiences") ? { ...step, status: "done" } : step
      )
    );
    setNewUser((prev) => ({ ...prev, ...data }));

    navigate("/new/skills");
  };

  const onNewField = () => {
    append({ data: "" });
  };

  useEffect(() => {
    if ("experiences" in newUser && Object.values(newUser.experiences).length > 0) {
      const experiences = newUser.experiences as Record<number, Record<string, string>>[];
      for (let i = 0; i < experiences.length; i += 1) {
        append({ data: experiences[i]["data" as unknown as keyof typeof experiences[typeof i]] });
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
        <Title>Work Experiences</Title>
        <Button
          type="button"
          size="md"
          variant="primary"
          onClick={onNewField}
          css="gap: 0.5rem; padding-bottom: 1px;"
        >
          <IconPlus size={20} />
          New Experience
        </Button>
      </Wrapper>
      <Grid>
        {fields.length === 0 && <EmptyState>Put at least one input</EmptyState>}
        {fields.map((_, idx) => (
          <FormControl key={idx}>
            <Label htmlFor="experience">Experience</Label>
            <Input
              id="experience"
              elementSize="lg"
              variant="primary"
              aria-invalid={
                errors?.experiences && errors?.experiences[idx]?.data?.type === ("required" as any)
              }
              aria-errormessage={`experiences-${idx}-error`}
              {...register(`experiences[${idx}].data`)}
            />

            {errors?.experiences && errors.experiences[idx]?.data?.type === ("required" as any) && (
              <Error id={`experiences-${idx}-error`}>This field is required</Error>
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

export default WorkExperience;
