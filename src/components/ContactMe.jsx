import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          toast("Message Sent!!", {
            icon: "✅",
            style: {
              borderRadius: "5px",
              background: "#333",
              color: "#fff",
            },
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0.3 }}
        transition={{ duration: 0.5, delay:0.18}}
        className="max-w-xl mx-auto mt-16 p-8 rounded-lg font-mono">
        <div className="relative p-[4px] group rounded-lg">
          <div className="absolute inset-0 z-[1] rounded-lg opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"></div>
          <div className="absolute inset-0 z-[1] rounded-lg will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"></div>
          <div className="relative z-[5] bg-gray-800 p-8 rounded-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col text-white rounded-lg"
            >
              <h2 className="title-font mb-1 text-green-300 text-3xl font-bold">
                Let&apos;s work together
              </h2>
              <p className="text-sm text-slate-300 ">Or reach me at <a className="underline" target="__blank" href="mailto:nikhileshg02@gmail.com">nikhileshg02@gmail.com</a></p>
              <div className="mb-4">
                <label htmlFor="name" className="text-sm leading-7">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full rounded border border-gray-300 bg-gray-700 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
                  className="w-full rounded border border-gray-300 bg-gray-700 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-700 py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 px-6 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg text-center mb-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
