import { IconPlus } from "@tabler/icons";
import { animate } from "animation";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import Error from "components/atoms/Error";
import { Flex, FormControl } from "components/atoms/shared";
import { useNewUser } from "context/NewUserContext";
import { useSteps } from "context/StepsContext";
import { useUsers } from "context/UsersContext";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { IUserTable } from "types";
import { useDisabledButton } from "pages/hooks/useDisabledButton";
import { Container, EmptyState, Grid, Title, Wrapper } from "./shared";

const Skills = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm<IUserTable>();
  const { fields, append } = useFieldArray({
    control,
    name: "skills",
  });

  const navigate = useNavigate();
  const disabled = useDisabledButton(fields);

  const { setNewUser, newUser } = useNewUser();
  const { setSteps } = useSteps();

  const onSubmit: SubmitHandler<IUserTable> = (data) => {
    setSteps((prev) =>
      prev.map((step) => (step.pathname.includes("skills") ? { ...step, status: "done" } : step))
    );

    setNewUser((prev) => ({ ...prev, ...data }));
  };

  const onNewField = () => {
    append({ data: "" });
  };

  useEffect(() => {
    if (
      "skills" in newUser &&
      Object.values(newUser.skills).filter((n: any) => n.data).length > 0
    ) {
      const skills = newUser.skills as Record<number, Record<string, string>>[];
      for (let i = 0; i < skills.length; i += 1) {
        append({ data: skills[i]["data" as unknown as keyof typeof skills[typeof i]] });
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
        <Title>Skills</Title>
        <Button type="button" size="md" variant="primary" onClick={onNewField} css="gap: 0.5rem;">
          <IconPlus size={20} />
          New Skill
        </Button>
      </Wrapper>
      <Grid>
        {fields.length === 0 && <EmptyState>Put at least one input</EmptyState>}
        {fields.map((_, idx) => (
          <FormControl key={idx}>
            <Label htmlFor="skill">Skill</Label>
            <Input
              id="skill"
              elementSize="lg"
              variant="primary"
              aria-invalid={false}
              aria-errormessage={`skill-${idx}-error`}
              {...register(`skills[${idx}].data`)}
            />
            {errors?.skills && errors.skills[idx]?.data?.type === ("required" as any) && (
              <Error id={`skill-${idx}-error`}>This field is required</Error>
            )}
          </FormControl>
        ))}
      </Grid>
      <Flex justifyContent="flex-end" gap="1rem" css="width: 100%; margin-top: 2rem;">
        <Button type="button" size="sm" variant="secondary" onClick={() => navigate(-1)}>
          Prev
        </Button>
        <Button type="submit" size="sm" variant="secondary" disabled={disabled}>
          Submit
        </Button>
      </Flex>
    </Container>
  );
};

export default Skills;
