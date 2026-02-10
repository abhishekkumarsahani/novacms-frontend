import { Typography, List, ListItem } from "@mui/material";
import Layout from "../../components/layout/Layout";

export default function PostList() {
  return (
    <Layout>
      <Typography variant="h4">Posts</Typography>
      <List>
        <ListItem>Post One</ListItem>
        <ListItem>Post Two</ListItem>
      </List>
    </Layout>
  );
}
