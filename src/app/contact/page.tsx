import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for My Startup",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Currently, the company is still in the Ideation to Pre-Seed stage, so registration and legal requirements are still pending. For more details, please feel free to contact me"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
