import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Button>
      <Link target="_blank" to={import.meta.env.VITE_SERVER_API_URL}>
        Login
      </Link>
    </Button>
  );
};

export default Login;
