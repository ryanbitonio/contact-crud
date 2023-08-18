import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validations/contact-form";
import { useForm } from "react-hook-form";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";

function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>, e: any) => {
    e.preventDefault();

    toast({
      title: "Successfully Added!",
      description: "You have added a new contact.",
      duration: 3000,
    });

    form.reset();
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.target as HTMLInputElement).name === "mobileNumber" &&
      (e.target as HTMLInputElement).value.length === 11
    ) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("firstName")}
                    type="text"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("middleName")}
                    type="text"
                    placeholder="Middle Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("lastName")}
                    type="text"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input
                    onKeyPress={onKeyPress}
                    {...form.register("mobileNumber")}
                    type="number"
                    placeholder="Mobile Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("email")}
                    type="text"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={
              Object.keys(form.formState.errors).length > 0
                ? "self-center"
                : "self-end"
            }
            type="submit"
          >
            Add
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}

export default ContactForm;
