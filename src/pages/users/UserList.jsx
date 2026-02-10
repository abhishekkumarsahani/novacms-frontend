import { Typography, List, ListItem } from "@mui/material";
import Layout from "../../components/layout/Layout";

export default function UserList() {
  return (
    <Layout>
      <Typography variant="h4">Users</Typography>
      <List>
        <ListItem>Admin</ListItem>
        <ListItem>Editor</ListItem>
      </List>
    </Layout>
  );
}
