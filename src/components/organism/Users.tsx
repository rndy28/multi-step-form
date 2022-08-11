import Table from "components/organism/Table";
import { IconEye } from "@tabler/icons";
import { memo } from "react";
import type { IUserTable } from "types";

type Props = {
  head: string[];
  body: IUserTable[];
  // eslint-disable-next-line no-unused-vars
  handleView: (userId: number) => () => void;
};

const Users = ({ head, body, handleView }: Props) => {
  return (
    <Table>
      <Table.Head>
        <Table.Tr>
          {head.map((item, index) => (
            <Table.Th key={index}>{item}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {body.map((item, index) => (
          <Table.Tr key={index}>
            <Table.Td>
              <Table.Th>Id</Table.Th>
              <Table.Text>{item.id}</Table.Text>
            </Table.Td>
            <Table.Td>
              <Table.Th>First Name</Table.Th>
              <Table.Text>{item.firstName}</Table.Text>
            </Table.Td>
            <Table.Td>
              <Table.Th>Last Name</Table.Th>
              <Table.Text>{item.lastName}</Table.Text>
            </Table.Td>
            <Table.Td>
              <Table.Th>Email</Table.Th>
              <Table.Text>{item.email}</Table.Text>
            </Table.Td>
            <Table.Td>
              <Table.Th>Address</Table.Th>
              <Table.Text>{item.address}</Table.Text>
            </Table.Td>
            <Table.Td css="cursor: pointer;" onClick={handleView(item.id)}>
              <Table.Th>Details</Table.Th>
              <IconEye color="#909297" />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Body>
    </Table>
  );
};

const memoUsers = memo(Users);

export default memoUsers;
