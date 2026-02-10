import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import {
  Dashboard,
  Description,
  Article,
  People,
  Settings
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menu = [
  { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
  { text: "Pages", icon: <Description />, path: "/admin/pages" },
  { text: "Posts", icon: <Article />, path: "/admin/posts" },
  { text: "Users", icon: <People />, path: "/admin/users" },
  { text: "Settings", icon: <Settings />, path: "/admin/settings" }
];

export default function Sidebar() {
  const location = useLocation(); // for active highlight

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
      }}
    >
      {/* Empty Toolbar to push menu below AppBar */}
      <Toolbar />
      <List>
        {menu.map(item => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path} // highlight active
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
