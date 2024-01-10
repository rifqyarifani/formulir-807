"use client";

import { dokumenSchema } from "@/app/schema";
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
import prisma from "@/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dokumen, Dus, JenisBerkas } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  dokumen?: Dokumen;
  jenisBerkas?: JenisBerkas[];
  dus?: Dus[];
}

export default function ProfileForm({ dokumen, jenisBerkas, dus }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof dokumenSchema>>({
    resolver: zodResolver(dokumenSchema),
  });

  async function onSubmit(values: z.infer<typeof dokumenSchema>) {
    try {
      setLoading(true);
      if (dokumen) {
        await axios.patch(`/api/arsip/${dokumen.id}`, values);
      } else {
        await axios.post("/api/arsip", values);
      }
      router.back();
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
          name="noDokumen"
          defaultValue={dokumen?.noDokumen}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>No Dokumen</FormLabel>
                <FormControl>
                  <Input placeholder="No Dokumen" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="npwp"
          defaultValue={dokumen?.npwp}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>NPWP</FormLabel>
                <FormControl>
                  <Input placeholder="NPWP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="namaWp"
          defaultValue={dokumen?.namaWp}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Nama WP</FormLabel>
                <FormControl>
                  <Input placeholder="Nama WP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="jenisBerkasId"
          defaultValue={dokumen?.jenisBerkasId}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Berkas</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={dokumen?.jenisBerkasId}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Jenis Berkas" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {jenisBerkas?.map((jenis) => (
                    <SelectItem value={jenis.id} key={jenis.id}>
                      {jenis.nama}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="noDusId"
          defaultValue={dokumen?.noDusId}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dus</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={dokumen?.noDusId}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Dus" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {dus?.map((x) => (
                    <SelectItem value={x.id} key={x.id}>
                      {x.noDus}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          color="violet"
          size={"3"}
          variant="solid"
          className=" cursor-pointer"
        >
          {dokumen ? "Edit" : "Tambah"} Dokumen
          {loading && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

export const dynamic = "force-dynamic";
