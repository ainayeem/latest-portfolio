"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addContact } from "@/services/contact";
import { zodResolver } from "@hookform/resolvers/zod";
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
    <div>
      <Card className=" w-full text-white dark:bg-[#140C1C]  mt-10">
        <CardContent className="p-5 flex flex-col gap-8">
          {/* Title */}
          <div>
            <p className="text-sm text-[#110E18] dark:text-white">
              Feel free to reach out if you have any questions or concerns. I am open to work opportunities that align with my skills and interests.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Contact Form */}

            <div className="space-y-4 lg:flex-1 w-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="space-y-4 ">
                    {/* name  */}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-[#110E18] dark:text-white">
                              Your Name
                              <span className="text-red-500 ml-1">*</span>
                            </FormLabel>

                            <FormControl>
                              <Input {...field} name="name" placeholder="Enter Your Name" className="h-10 w-full" />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* email*/}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-[#110E18] dark:text-white">
                              Your Email
                              <span className="text-red-500 ml-1">*</span>
                            </FormLabel>

                            <FormControl>
                              <Input {...field} name="phone" placeholder="Enter Your Email" className="h-10" />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* phone */}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-[#110E18] dark:text-white">Your Phone Number</FormLabel>

                            <FormControl>
                              <Input {...field} name="phone" placeholder="Enter Your Number" className="h-10" />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* message */}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-[#110E18] dark:text-white">
                              Your Message
                              <span className="text-red-500 ml-1">*</span>
                            </FormLabel>

                            <FormControl>
                              <Textarea
                                {...field}
                                name="message"
                                placeholder="Enter Your Message ..."
                                className="h-36 text-[#110E18] dark:text-white"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* submit button */}
                    <Button type="submit" className="w-full bg-[#8750F7] hover:bg-[#733DD6] text-white cursor-pointer">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {/* <Image src={email} alt="Email Icon" width={24} height={24} /> */}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* social icons */}
            <div className="space-y-4 lg:flex-1 w-full">
              <p className="text-[#8750F7] text-2xl font-bold">Moshfiqur Rahman</p>
              <p className="text-[#989BA4] text-base">moshfiqurrahman37@gmail.com</p>
              <p className="text-[#989BA4] text-base">Gulshan-02, Dhaka</p>
              <div>
                <div className="flex items-center gap-5">
                  <Link href="#">{/* <Image src={github} width={40} height={40} alt="GitHub Icon" /> */}</Link>
                  <Link href="https://www.facebook.com/emambokhari99">
                    {/* <Image src={facebook} width={40} height={40} alt="Facebook Icon" /> */}
                  </Link>
                  <Link href="#">{/* <Image src={linkedin} width={40} height={40} alt="Linkedin Icon" /> */}</Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
