import Contact from "@/components/pages/Contact";
import Login from "@/components/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
