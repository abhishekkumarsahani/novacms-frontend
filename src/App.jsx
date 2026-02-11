import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/public/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import PageList from "./pages/pages/PageList";
import PageCreate from "./pages/pages/PageCreate";
import PageEdit from "./pages/pages/PageEdit";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* 🔐 PROTECTED ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/pages"
          element={
            <ProtectedRoute>
              <PageList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/pages/create"
          element={
            <ProtectedRoute>
              <PageCreate />
            </ProtectedRoute>
          }
        />

          <Route
          path="/admin/pages/edit/:id"
          element={
            <ProtectedRoute>
              <PageEdit />
            </ProtectedRoute>
          }
        />

      </Routes>
    </AuthProvider>
  );
}
