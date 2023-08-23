import { RootState } from "@/main";
import { useSelector } from "react-redux";
import { columns } from "../data-table/columns";
import { DataTable } from "../data-table/data-table";
import ContactForm from "../forms/contact-form";

const Contact = () => {
  const data = useSelector((state: RootState) => state.contact);

  return (
    <div className="flex flex-col p-12 gap-5">
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
