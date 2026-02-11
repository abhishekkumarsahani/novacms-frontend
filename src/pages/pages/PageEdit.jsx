import { useState, useEffect } from "react";
import { TextField, Button, Paper, Checkbox, FormControlLabel, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getPage, updatePage } from "../../api/pageApi";
import Layout from "../../components/layout/Layout";

export default function PageEdit() {
  const { id } = useParams(); // get page ID from URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    try {
      setLoading(true);
      const res = await getPage(id); // fetch page by ID
      setTitle(res.Title);           // set form fields
      setContent(res.Content);
      setIsPublished(res.IsPublished);
    } catch (err) {
      console.error(err);
      alert("Failed to load page data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePage(id, {
        Title: title,
        Slug: title.toLowerCase().replace(/\s+/g, "-"), // optional slug auto-generation
        Content: content,
        IsPublished: isPublished
      });
      navigate("/admin/pages"); // go back to page list after update
    } catch (err) {
      console.error(err);
      alert("Failed to update page");
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <Layout>
      <Paper sx={{ p: 3, maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            fullWidth
            label="Content"
            multiline
            rows={6}
            margin="normal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
            Update Page
          </Button>

          <Button
            variant="outlined"
            sx={{ mt: 2, ml: 2 }}
            onClick={() => navigate("/admin/pages")}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </Layout>
  );
}
