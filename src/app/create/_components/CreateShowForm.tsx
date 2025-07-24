"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import  { showSchema } from "~/common/zod/showSchema";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";


export default function CreateShowForm() {
  const { mutateAsync, error } = api.show.create.useMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof showSchema>>({
    resolver: zodResolver(showSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      thumbnail: "",
      date:new Date().toISOString().split("T")[0], // Default to today's date in YYYY-MM-DD format
    },
  });

  async function onSubmit(values: z.infer<typeof showSchema>) {
 
    form.reset();
    console.log(values);
    const out = await mutateAsync(values);
    console.log(out);
    // router.push("/shows")
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the title of the Show... "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the Description of the show..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Give the thumbnail URL of the show..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the location of the show..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input {...field} type="Date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
