import { animate } from "animation";
import Button from "components/atoms/Button";
import Error from "components/atoms/Error";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
import { Flex, FormControl } from "components/atoms/shared";
import { useSteps } from "context/StepsContext";
import { useUsers } from "context/UsersContext";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUserTable } from "types";
import { useNewUser } from "context/NewUserContext";
import { Container, Grid, Title } from "./shared";

const PersonalData = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm<IUserTable>();
  const navigate = useNavigate();
  const { setSteps } = useSteps();
  const { setNewUser, newUser } = useNewUser();
  const { currentNewUser } = useUsers();

  const onSubmit: SubmitHandler<IUserTable> = (data) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.pathname.includes("personal-data") ? { ...step, status: "done" } : step
      )
    );
    const id = currentNewUser ? currentNewUser.id + 1 : 1;
    setNewUser({ ...data, id });

    navigate("/new/education", { state: { id } });
  };

  useEffect(() => {
    if (Object.values(newUser).length > 0) {
      const { id, ...rest } = newUser;
      reset(rest);
    }
  }, []);

  return (
    <Container
      onSubmit={handleSubmit(onSubmit)}
      variants={animate}
      initial="exit"
      animate="visible"
      exit="exit"
    >
      <Title css="margin-bottom: 1.5rem;">Personal Data</Title>
      <Grid>
        <FormControl>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            elementSize="lg"
            variant="primary"
            aria-invalid={errors.firstName?.type === "required"}
            aria-errormessage="first-name-error"
            {...register("firstName", { required: true })}
          />
          {errors.firstName?.type === "required" && (
            <Error id="first-name-error">First name is required</Error>
          )}
        </FormControl>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            elementSize="lg"
            variant="primary"
            aria-invalid={errors.email?.type === "required" || errors.email?.type === "pattern"}
            aria-errormessage="email-error"
            {...register("email", {
              required: true,
              pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === "required" && <Error id="email-error">Email is required</Error>}
          {errors.email?.type === "pattern" && <Error id="email-error">Email is invalid</Error>}
        </FormControl>
        <FormControl>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            elementSize="lg"
            variant="primary"
            aria-invalid={errors?.lastName?.type === "required"}
            aria-errormessage="last-name-error"
            {...register("lastName", { required: true })}
          />
          {errors.lastName?.type === "required" && (
            <Error id="last-name-error">Last Name is required</Error>
          )}
        </FormControl>
        <FormControl>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            elementSize="lg"
            variant="primary"
            aria-invalid={errors?.address?.type === "required"}
            aria-errormessage="address-error"
            {...register("address", { required: true })}
          />
          {errors?.address?.type === "required" && (
            <Error id="address-error">Address is required</Error>
          )}
        </FormControl>
      </Grid>
      <Flex justifyContent="flex-end" gap="1rem" css="width: 100%; margin-top: 2rem;">
        <Button type="button" size="sm" variant="secondary" onClick={() => navigate(-1)}>
          Prev
        </Button>
        <Button type="submit" size="sm" variant="secondary">
          Next
        </Button>
      </Flex>
    </Container>
  );
};

export default PersonalData;
