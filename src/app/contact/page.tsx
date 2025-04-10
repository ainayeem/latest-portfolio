import ContactForm from "@/components/modules/contacts";
import SectionTitle from "@/components/shared/SectionTitle";

export default function ContactPage() {
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto bg-custom-black-100 py-20 ">
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
