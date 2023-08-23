import { formSchema } from "@/lib/validations/contact-form";
import { z } from "zod";

export type Inputs = z.infer<typeof formSchema>;
