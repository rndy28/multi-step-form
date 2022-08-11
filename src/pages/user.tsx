import { IconArrowLeft } from "@tabler/icons";
import Button from "components/atoms/Button";
import { useUsers } from "context/UsersContext";
import { useNavigate, useParams } from "react-router-dom";
import { layout } from "styles/user";

const User = () => {
  const { userId } = useParams();
  const { users } = useUsers();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === Number(userId));

  if (!user) return null;

  return (
    <div css={layout}>
      <Button
        type="button"
        size="md"
        variant="primary"
        css="gap: 0.5rem; margin-bottom: 2rem; max-width: 10rem;"
        onClick={() => navigate("/")}
      >
        <IconArrowLeft size={20} />
        Back Home
      </Button>
      <article>
        <p>
          <span>Id: </span>
          {user.id}
        </p>
        <p>
          <span>First Name: </span>
          {user.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {user.lastName}
        </p>
        <p>
          <span>Email: </span>
          {user.email}
        </p>
        <p>
          <span>Address: </span>
          {user.address}
        </p>
        <p>
          <span>Education: </span>
          {"educations" in user &&
          Object.values(user.educations).filter((n: any) => n.data).length > 0
            ? Object.values(user.educations).map((curr: any, index, arr) =>
                arr.length > 1 && arr[arr.length - 1] !== arr[index] ? `${curr.data}, ` : curr.data
              )
            : "Nil"}
        </p>
        <p>
          <span>Work Experiences: </span>
          {"experiences" in user &&
          Object.values(user.experiences).filter((n: any) => n.data).length > 0
            ? Object.values(user.experiences).map((curr: any, index, arr) =>
                arr.length > 1 && arr[arr.length - 1] !== arr[index] ? `${curr.data}, ` : curr.data
              )
            : "Nil"}
        </p>
        <p>
          <span>Skills: </span>
          {"skills" in user && Object.values(user.skills).filter((n: any) => n.data).length > 0
            ? Object.values(user.skills).map((curr: any, index, arr) =>
                arr.length > 1 && arr[arr.length - 1] !== arr[index] ? `${curr.data}, ` : curr.data
              )
            : "Nil"}
        </p>
      </article>
    </div>
  );
};

export default User;
