'use client'

import { corporateSchema, personalSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export const CorporateInput = () => {
  const form = useForm<z.infer<typeof corporateSchema>>({
  resolver: zodResolver(corporateSchema),
  defaultValues: {
    username: "",
    email: "",
    password: "",
  }
  });

  const onSubmit = (values: z.infer<typeof corporateSchema>) => {

  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <FormField 
          control={form.control} 
          name="email"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormLabel className="text-lg">
                Username
              </FormLabel>
              <FormControl>
                <Input 
                placeholder="Username" 
                className="w-full py-2 h-12 placeholder:text-lg" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField 
          control={form.control} 
          name="email"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormLabel className="text-lg">
                Email
              </FormLabel>
              <FormControl>
                <Input 
                placeholder="Email" 
                className="w-full py-2 h-12 placeholder:text-lg" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField 
          control={form.control} 
          name="email" 
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Password
              </FormLabel>
              <FormControl>
                <Input 
                placeholder="Password" 
                className="w-full py-2 h-12 placeholder:text-lg" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <Button 
          type="submit" 
          className="text-lg h-12 w-full uppercase bg-emerald-700 hover:bg-emerald-900 text-white mt-10">
              Sign in
          </Button>
        </form>
        
        <div className="flex items-center justify-center flex-col mt-20 gap-y-5">
          <p className="text-foreeground-muted text-xl">Don&rsquo;t have an account? <Link href='/sign-up' className="text-emerald-700 underline-offset-2 hover:underline">Sign Up</Link></p>
          <Link href='/' className="text-emerald-700 text-xl underline-offset-2 hover:underline">Forgot Password</Link>
        </div>
    </Form>
  )
}
