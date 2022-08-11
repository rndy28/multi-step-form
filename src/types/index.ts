export type Size = "sm" | "md" | "lg";

export type Position = "left" | "right";

export type StepT = {
  id: number;
  title: string;
  status: "done" | "filling" | "not yet";
  pathname: string;
};

type AdditionalUserData = Record<string, any>;

export interface IUserTable extends AdditionalUserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

export type StepsT = "personal data" | "education" | "work experience" | "skills";
