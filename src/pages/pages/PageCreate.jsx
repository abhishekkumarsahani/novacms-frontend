import { useState } from "react";
import { TextField, Button, Typography, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createPage } from "../../api/pageApi";
import Layout from "../../components/layout/Layout";

export default function PageCreate() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPage({ title, slug, content, isPublished });
      navigate("/admin/pages");
    } catch (err) {
      console.error(err);
      alert("Failed to create page");
    }
  };

  return (
    <Layout>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Create Page
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Slug"
          margin="normal"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          helperText="URL-friendly slug (e.g. about-us)"
        />

        <TextField
          fullWidth
          label="Content"
          multiline
          rows={6}
          margin="normal"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
            />
          }
          label="Publish"
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save Page
        </Button>
      </form>
    </Layout>
  );
}
