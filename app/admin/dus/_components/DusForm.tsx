"use client";

import { dusSchema } from "@/app/schema";
import Spinner from "@/components/Spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dus } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  dus?: Dus;
}

export default function ProfileForm({ dus }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof dusSchema>>({
    resolver: zodResolver(dusSchema),
  });

  async function onSubmit(values: z.infer<typeof dusSchema>) {
    try {
      setLoading(true);
      if (dus) {
        await axios.patch(`/api/admin/dus/${dus.id}`, values);
      } else {
        await axios.post("/api/admin/dus", values);
      }
      router.push("/admin/dus");
      router.refresh();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-4 container"
      >
        <FormField
          control={form.control}
          name="noDus"
          defaultValue={dus?.noDus}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>No Dus</FormLabel>
                <FormControl>
                  <Input placeholder="No Dus" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="noRak"
          defaultValue={dus?.noRak}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>No Rak</FormLabel>
                <FormControl>
                  <Input placeholder="No Rak" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button
          disabled={loading}
          color="violet"
          size={"3"}
          variant="solid"
          className=" cursor-pointer"
        >
          {dus ? "Edit" : "Tambah"} Dus
          {loading && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

export const dynamic = "force-dynamic";
