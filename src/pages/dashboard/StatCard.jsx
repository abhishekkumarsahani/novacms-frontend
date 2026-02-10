import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function StatCard({ title, value }) {
  return (
    <Grid item xs={12} md={3}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h4">{value}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
