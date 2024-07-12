import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

export default function ContactMe() {
  const form = useRef();
  const [isVerified,setisVerified]=useState(false);

  function verify(value){
    setisVerified(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const data = e.target;

    if(!isVerified){
      toast.error("Captcha not verified");
      return;
    }

    if (
      data.email.value === "" ||
      data.name.value === "" ||
      data.message.value === ""
    ) {
      toast.error("Fill all inputs");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            toast.success("Message sent!!");
            data.email.value = "";
            data.name.value = "";
            data.message.value = "";
          },
          (error) => {
            toast.error("FAILED TO SEND EMAIL", error.text);
          }
        );
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="max-w-xl mx-auto mt-16 lg:p-8 rounded-lg font-mono"
      >
        <div className="relative p-[4px] group rounded-lg">
          <div className="absolute inset-0 z-[1] rounded-lg opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#64748b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_0_0,#d1d5db,#141316)]"></div>
          <div className="absolute inset-0 z-[1] rounded-lg will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#64748b,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_0_0,#d1d5db,#141316)]"></div>
          <div className="relative z-[5] bg-slate-800 p-5 sm:p-8 rounded-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col text-white rounded-lg"
            >
              <h2 className="title-font mb-1 text-pink-300 text-3xl font-bold">
                Let&apos;s work together
              </h2>

              <div className="mb-4">
                <label htmlFor="name" className="text-sm leading-7">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full rounded border border-slate-500 bg-slate-700 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-sm leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full rounded border border-slate-500 bg-slate-700 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-sm leading-7">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  className="h-32 w-full resize-none rounded border border-slate-500 bg-slate-700 py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                ></textarea>
              </div>
              <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={verify} />
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none font-semibold hover:text-gray-200 focus:ring-purple-200 dark:focus:ring-purple-800  rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 mt-4"
              >
                Send
              </button>
            </form>
            <p className="text-sm text-slate-400">
              Or mail me at{" "}
              <a
                className="underline"
                target="__blank"
                href="mailto:nikhileshg02@gmail.com"
              >
                nikhileshg02@gmail.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
