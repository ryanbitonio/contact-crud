import { RootState } from "@/main";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { columns } from "../data-table/columns";
import { DataTable } from "../data-table/data-table";
import ContactForm from "../forms/contact-form";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const data = useSelector((state: RootState) => state.contact);

  // const [user, setUser] = useState(null);

  const getUser = () => {
    const url = `${import.meta.env.VITE_SERVER_API_URL}/auth/login/success`;
    const { data } = axios.get(url, { withCredentials: true });
    console.log("user data here: ", data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col p-12 gap-5">
      <Button>
        <Link to={`${import.meta.env.VITE_SERVER_API_URL}/auth/logout`}>
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
