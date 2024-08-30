"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(10, {
    message: "Subject must be at least 10 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contacts() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <section id="experiences" className="min-h-screen w-full py-20">
      <div className="flex flex-col gap-y-10">
        <div className="font-bold text-2xl">✉️ Contacts</div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xl">Name</FormLabel>
                    <FormControl>
                      <Input className="h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xl">Email</FormLabel>
                    <FormControl>
                      <Input className="h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xl">Subject</FormLabel>
                    <FormControl>
                      <Input className="h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xl">Email</FormLabel>
                    <FormControl>
                      <Input className="h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
