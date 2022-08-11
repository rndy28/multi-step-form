import { IconPlus } from "@tabler/icons";
import Button from "components/atoms/Button";
import { Flex } from "components/atoms/shared";
import Users from "components/organism/Users";
import { useUsers } from "context/UsersContext";
import { useNavigate } from "react-router-dom";
import { layout, emptyState } from "styles/home";

const home = () => {
  const { users } = useUsers();
  const navigate = useNavigate();

  const handleView = (userId: string) => {
    return () => {
      navigate(`/users/${userId}`);
    };
  };
  return (
    <div css={layout}>
      <Flex>
        <h1>Teravin test ReactJS</h1>
        <Button
          size="lg"
          variant="primary"
          to="/new/personal-data"
          css={`
            gap: 0.3rem;
            padding-bottom: 2px;
          `}
        >
          <IconPlus />
          Add data
        </Button>
      </Flex>
      {users.length === 0 ? (
        <div css={emptyState}>
          <h1>204</h1>
          <p>There&apos;s no users here</p>
        </div>
      ) : (
        <Users
          head={["Id", "First Name", "Last Name", "Email", "Address", "Details"]}
          body={users}
          handleView={handleView}
        />
      )}
    </div>
  );
};

export default home;
