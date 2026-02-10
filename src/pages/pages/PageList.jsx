import { Button, Typography, List, ListItem } from "@mui/material";
import Layout from "../../components/layout/Layout";

export default function PageList() {
  return (
    <Layout>
      <Typography variant="h4">Pages</Typography>
      <Button variant="contained" href="/pages/create">Add Page</Button>

      <List>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </List>
    </Layout>
  );
}
