import { DataTable } from "../data-table/data-table";
import { ContactTypes, columns } from "../data-table/data-table-columns";
import ContactForm from "../forms/ContactForm";

const Contact = () => {
  const data: ContactTypes[] = [
    {
      id: "1",
      name: "Ryan Gonzaga Bitonio",
      mobile: "09297921899",
      email: "ken99@yahoo.com",
    },
    {
      id: "2",
      name: "Mary Joy Aquino Bitonio",
      mobile: "09297921899",
      email: "Abe45@gmail.com",
    },
    {
      id: "3",
      name: "Nicole Gonzaga Bitonio",
      mobile: "09297921899",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "4",
      name: "Kevin Gonzaga Bitonio",
      mobile: "09297921899",
      email: "Silas22@gmail.com",
    },
    {
      id: "5",
      name: "Rowena Gonzaga Bitonio",
      mobile: "09297921899",
      email: "carmella@hotmail.com",
    },
    {
      id: "6",
      name: "Mary Joy Aquino Bitonio",
      mobile: "09297921899",
      email: "Abe45@gmail.com",
    },
    {
      id: "7",
      name: "Nicole Gonzaga Bitonio",
      mobile: "09297921899",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "8",
      name: "Kevin Gonzaga Bitonio",
      mobile: "09297921899",
      email: "Silas22@gmail.com",
    },
    {
      id: "9",
      name: "Rowena Gonzaga Bitonio",
      mobile: "09297921899",
      email: "carmella@hotmail.com",
    },
    {
      id: "10",
      name: "Mary Joy Aquino Bitonio",
      mobile: "09297921899",
      email: "Abe45@gmail.com",
    },
    {
      id: "11",
      name: "Nicole Gonzaga Bitonio",
      mobile: "09297921899",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "12",
      name: "Kevin Gonzaga Bitonio",
      mobile: "09297921899",
      email: "Silas22@gmail.com",
    },
    {
      id: "13",
      name: "Rowena Gonzaga Bitonio",
      mobile: "09297921899",
      email: "carmella@hotmail.com",
    },
  ];

  return (
    <div className="flex flex-col p-12 gap-10">
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
