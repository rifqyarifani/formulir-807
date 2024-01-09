"use client";

import { jenisBerkasSchema } from "@/app/schema";
import Spinner from "@/components/Spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { JenisBerkas } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  jenisBerkas?: JenisBerkas;
}

export default function ProfileForm({ jenisBerkas }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof jenisBerkasSchema>>({
    resolver: zodResolver(jenisBerkasSchema),
  });

  async function onSubmit(values: z.infer<typeof jenisBerkasSchema>) {
    try {
      setLoading(true);
      if (jenisBerkas) {
        await axios.patch(`/api/admin/jenisberkas/${jenisBerkas.id}`, values);
      } else {
        await axios.post("/api/admin/jenisberkas", values);
      }
      router.push("/admin/jenisberkas");
      router.refresh();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
        <FormField
          control={form.control}
          name="nama"
          defaultValue={jenisBerkas?.nama}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Nama" {...field} />
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
          {jenisBerkas ? "Edit" : "Tambah"} Jenis Berkas
          {loading && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

export const dynamic = "force-dynamic";
