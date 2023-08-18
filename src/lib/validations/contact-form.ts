import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "Required" })
    .min(2, { message: "First Name must be at least 3 characters" })
    .max(50, { message: "First Name must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "First Name should contain only letters and spaces",
    }),
  middleName: z
    .string()
    .nonempty({ message: "Required" })
    .min(2, { message: "Middle Name must be at least 3 characters" })
    .max(50, { message: "Middle Name must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Middle Name should contain only letters and spaces",
    }),
  lastName: z
    .string()
    .nonempty({ message: "Required" })
    .min(2, { message: "Last Name must be at least 3 characters" })
    .max(50, { message: "Last Name must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Last Name should contain only letters and spaces",
    }),
  mobileNumber: z
    .string()
    .nonempty({ message: "Required" })
    .regex(/^(09\d{9}|\+639\d{7})$/, {
      message: "Mobile number must be in valid format (e.g. 09151234567)",
    }),
  email: z
    .string()
    .nonempty({ message: "Required" })

    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must be 255 characters only" })
    .email({ message: "Email Address must be in valid format" }),
});
