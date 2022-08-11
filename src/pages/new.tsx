import { IconArrowLeft } from "@tabler/icons";
import Button from "components/atoms/Button";
import { Flex } from "components/atoms/shared";
import Steps from "components/molecules/Steps";
import { StepsProvider } from "context/StepsContext";
import { Outlet, useNavigate } from "react-router-dom";
import { layout, wrapper } from "styles/new";

const New = () => {
  const navigate = useNavigate();

  return (
    <div css={layout}>
      <Button
        type="button"
        size="sm"
        variant="primary"
        css="gap: 0.5rem; margin-bottom: 2rem; max-width: 10rem;"
        onClick={() => navigate("/")}
      >
        <IconArrowLeft size={20} />
        Back Home
      </Button>

      <h1>Form submission</h1>
      <p>Follow the simple 4 steps to complete your submission</p>
      <Flex css={wrapper}>
        <StepsProvider>
          <Steps />
          <Outlet />
        </StepsProvider>
      </Flex>
    </div>
  );
};

export default New;
