import { TextField, Button, Typography } from "@mui/material";
import Layout from "../../components/layout/Layout";

export default function PageCreate() {
  return (
    <Layout>
      <Typography variant="h4">Create Page</Typography>

      <TextField fullWidth label="Title" margin="normal" />
      <TextField fullWidth label="Slug" margin="normal" />
      <TextField
        fullWidth
        label="Content"
        multiline
        rows={6}
        margin="normal"
      />

      <Button variant="contained">Save</Button>
    </Layout>
  );
}
