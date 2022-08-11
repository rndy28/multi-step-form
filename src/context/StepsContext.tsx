import React, { createContext, useContext, useMemo, useState } from "react";
import { StepT } from "types";

const initialSteps: StepT[] = [
  { id: 1, title: "Personal Data", status: "not yet", pathname: "personal-data" },
  { id: 2, title: "Education", status: "not yet", pathname: "education" },
  { id: 3, title: "Work Experiences", status: "not yet", pathname: "work-experiences" },
  { id: 4, title: "Skills", status: "not yet", pathname: "skills" },
];

type StepsContextT = {
  steps: StepT[];
  setSteps: React.Dispatch<React.SetStateAction<StepT[]>>;
};

const StepsContext = createContext<StepsContextT>({} as StepsContextT);

export const StepsProvider = ({ children }: { children: React.ReactNode }) => {
  const [steps, setSteps] = useState<StepT[]>(initialSteps);
  const value = useMemo(() => ({ steps, setSteps }), [steps]);

  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>;
};

export const useSteps = () => useContext(StepsContext);
