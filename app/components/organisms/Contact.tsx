import { ToastContainer } from "react-toastify";
import ScrollSection from "../atoms/ScrollSection";
import ContactForm from "../molecules/ContactForm";
import Image from "next/image";
import LinkedInIcon from "@/app/svgr/linkedIn";
import GithubIcon from "@/app/svgr/github";

const Contact = () => {
  return (
    <section
      id="contact_me"
      className="bg-gradient relative border-b-2 border-transparent"
    >
      <ToastContainer theme="dark" />
      <ScrollSection>
        <div className="bg-zinc-900 p-8 lg:p-16 xl:px-24 rounded-3xl mb-[-250px]">
          <div className="lg:flex-row flex flex-col-reverse gap-10 mb-10">
            <Image
              src="/contact.webp"
              alt="Contact icon"
              width={200}
              height={200}
              className="block w-36 h-36 lg:h-[200px] lg:w-[200px]"
            />
            <div className="flex flex-col justify-evenly w-full">
              <div className="flex gap-4 justify-between flex-wrap lg:flex-nowrap">
                <div className="text-4xl font-semibold">
                  Let's work together!
                </div>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/katarzyna-chr%C3%B3st-9010171bb/"
                  >
                    <LinkedInIcon
                      className="hover:fill-[#0e76a8] fill-[#FAF9F6] transition-colors"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a target="_blank" href="https://github.com/KatarzynaChrost">
                    <GithubIcon
                      className="hover:fill-[#6e5494] fill-[#FAF9F6] transition-colors"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
              <p className="text-zinc-400 max-w-[500px] mt-6 lg:mt-0">
                Interested in exploring collaboration opportunities?
                <br />
                Feel free to reach out to me.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </ScrollSection>
    </section>
  );
};

export default Contact;
