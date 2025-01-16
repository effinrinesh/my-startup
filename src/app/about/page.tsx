import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for my startup",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Well, this project is a brainchild of Effin Rinesh, the CEO and founder. While studying at NIT Trichy, Effin developed a keen interest in information security, recognizing its critical importance in protecting sensitive data and maintaining trust. To build a solid foundation in business strategy and analysis, he pursued an MBA in the UK. During this time, he explored the potential of data analytics and machine learning to revolutionize security operations by providing intelligent, real-time threat detection. Now, as the sole employee, he is dedicated to building River Sentinel AI into a Centre of Excellence in security."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
