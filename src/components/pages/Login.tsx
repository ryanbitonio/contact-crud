import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Button>
      <Link
        // target="_blank"
        to={
          "http://localhost:3000/auth/google/callback" ||
          `${import.meta.env.VITE_SERVER_API_URL}/auth/google/callback`
        }
      >
        Login
      </Link>
    </Button>
  );
};

export default Login;
