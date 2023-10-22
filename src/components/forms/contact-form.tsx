import { zodResolver } from "@hookform/resolvers/zod";

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
import { Inputs } from "@/types/types";
import { useForm } from "react-hook-form";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";

import { addRow } from "@/lib/store";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

function ContactForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const dispatch = useDispatch();
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: Inputs) => {
    toast({
      title: "Successfully Added!",
      description: "You have added a new contact.",
      duration: 3000,
    });

    dispatch(addRow(data));

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
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
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
                    ref={inputRef}
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
