"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addContact } from "@/services/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook, Github, Linkedin, Loader2, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { contactSchema } from "./contact.validtion";

export default function ContactForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const response = await addContact(data);

      if (response?.success) {
        toast.success("Your message has been sent successfully.");
        router.push("/");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="w-full bg-gradient-to-br border border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-custom-black-100">
        <CardContent className="p-8 md:p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            {/* <h2 className="text-3xl font-bold bg-indigo-500 bg-clip-text text-transparent mb-2">Get In Touch</h2> */}
            <p className="text-gray-300 max-w-lg mx-auto">
              Feel free to reach out if you have any questions or opportunities. I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:flex-1 w-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">
                          Your Name <span className="text-red-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="h-12  border-gray-700 text-white focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">
                          Your Email <span className="text-red-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="h-12  border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                            placeholder="john@example.com"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-12  border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                            placeholder="+880 1234 567890"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">
                          Your Message <span className="text-red-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className=" border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
                            placeholder="Hello, I'd like to talk about..."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white font-medium rounded-lg transition-all duration-300 shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="lg:flex-1 w-full flex flex-col justify-center">
              <div className="p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-indigo-500 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-indigo-400 text-sm">Email</p>
                      <p className="text-white font-medium">ain.nayeem1999@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-indigo-400 text-sm">Location</p>
                      <p className="text-white font-medium">Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-indigo-400 text-sm mb-4">Connect with me</p>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/ainayeem"
                        className="p-3 bg-indigo-700 hover:bg-indigo-600 rounded-full transition-colors"
                        target="_blank"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/ainayeem/"
                        className="p-3 bg-indigo-700 hover:bg-indigo-600 rounded-full transition-colors"
                        target="_blank"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61560522810852"
                        className="p-3 bg-indigo-700 hover:bg-indigo-600 rounded-full transition-colors"
                        target="_blank"
                      >
                        <Facebook className="h-5 w-5 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
