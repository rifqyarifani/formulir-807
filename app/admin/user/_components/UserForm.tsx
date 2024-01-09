"use client";

import { userSchema } from "@/app/schema";
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
import { User } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  user?: User;
}

export default function ProfileForm({ user }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });

  async function onSubmit(values: z.infer<typeof userSchema>) {
    try {
      setLoading(true);
      if (user) {
        await axios.patch(`/api/admin/user/${user.id}`, values);
      } else {
        await axios.post("/api/admin/user", values);
      }
      router.push("/admin/user");
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
          name="username"
          defaultValue={user?.username}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          defaultValue={user?.role}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          defaultValue={user?.password}
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
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
          {user ? "Edit" : "Tambah"} User
          {loading && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

export const dynamic = "force-dynamic";
