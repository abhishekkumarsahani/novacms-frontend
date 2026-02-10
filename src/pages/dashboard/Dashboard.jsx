import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import DraftsIcon from "@mui/icons-material/Drafts";

import Layout from "../../components/layout/Layout";

function StatCard({ title, value, icon }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ mr: 2 }}>{icon}</Box>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <Layout>
      {/* PAGE TITLE */}
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* STATS */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Pages"
            value="12"
            icon={<DescriptionIcon color="primary" fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Posts"
            value="48"
            icon={<ArticleIcon color="success" fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Users"
            value="6"
            icon={<PeopleIcon color="warning" fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Drafts"
            value="9"
            icon={<DraftsIcon color="error" fontSize="large" />}
          />
        </Grid>
      </Grid>

      {/* RECENT CONTENT */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Pages
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Home Page"
                    secondary="Published"
                  />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText
                    primary="About Us"
                    secondary="Draft"
                  />
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText
                    primary="Contact"
                    secondary="Published"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Info
              </Typography>

              <Typography variant="body2">
                CMS Version: 1.0.0
              </Typography>
              <Typography variant="body2">
                Environment: Development
              </Typography>
              <Typography variant="body2">
                Last Login: Today
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
