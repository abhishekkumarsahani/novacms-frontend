import { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getPages, deletePage } from "../../api/pageApi";
import Layout from "../../components/layout/Layout";

export default function PageList() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      const res = await getPages();
      setPages(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load pages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      try {
        await deletePage(id);
        loadPages();
      } catch (err) {
        console.error(err);
        alert("Failed to delete page");
      }
    }
  };

  return (
    <Layout>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Pages
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => navigate("/admin/pages/create")}
      >
        Add Page
      </Button>

      {loading ? (
        <CircularProgress />
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.Id}>
                  <TableCell>{page.Title}</TableCell>
                  <TableCell>{page.Slug}</TableCell>
                  <TableCell>{page.IsPublished ? "Published" : "Draft"}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      onClick={() => navigate(`/admin/pages/edit/${page.Id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleDelete(page.Id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Layout>
  );
}
