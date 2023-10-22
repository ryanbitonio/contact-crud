import { RootState } from "@/main";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { columns } from "../data-table/columns";
import { DataTable } from "../data-table/data-table";
import ContactForm from "../forms/contact-form";
import { Button } from "../ui/button";

const Contact = () => {
  const data = useSelector((state: RootState) => state.contact);

  return (
    <div className="flex flex-col p-12 gap-5">
      <Button>
        <Link
          to={
            import.meta.env.VITE_SERVER_LOGOUT_URL ||
            "http://localhost:3000/auth/logout"
          }
        >
          Logout
        </Link>
      </Button>
      <div>
        <h2 className="text-4xl font-bold font-sans">Add Contact</h2>
        <h3 className="text-xl font-regular font-sans">Create a new contact</h3>
      </div>
      <ContactForm />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Contact;
