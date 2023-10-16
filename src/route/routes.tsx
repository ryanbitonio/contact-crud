import Contact from "@/components/pages/Contact";
import Login from "@/components/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <Contact /> },
]);

export default router;
