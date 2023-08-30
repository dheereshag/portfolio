"use client";
import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { motion } from "framer-motion";
import { Footer } from "../../components";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendForm = (data) => {
    const { name, email, message } = data;
    console.log(name, email, message);
    if (!name || !email || !message) {
      return alert("Please fill all the fields");
    }
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div>
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold mb-10 text-cyan-500 leading-tight">
        Sip some coffee <span className="hvr-float">🍵</span> and chat with me
      </h2>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-5 w-full">
        <div className="group w-full gap-4 hover:shadow-md hover:shadow-rose-300 bg-rose-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer">
          <img
            src="./email.png"
            alt="email"
            className="w-9 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:-translate-y-1"
          />
          <a
            href="mailto:da11@iitbbs.ac.in"
            className="text-pink-500 font-pacifico"
          >
            da11@iitbbs.ac.in
          </a>
        </div>
        <div className="w-full gap-4 bg-blue-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer group hover:shadow-md hover:shadow-blue-300">
          <a
            href="tel:+91 9411245528"
            className="text-blue-800 font-pacifico text-sm flex items-center"
          >
            <img
              src="./mobile.png"
              alt="mobile"
              className="w-9 transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
            />
            <span className="ml-2">+91 9411245528</span>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit((data) => sendForm(data))}
        >
          <section className="flex flex-col md:flex-row gap-4">
            <div className="w-full rounded-3xl">
              <input
                className="font-karla text-sm hvr-box-shadow-inset p-4 bg-violet-100 outline-0 rounded-xl w-full"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 font-poppins text-sm">
                  *name is required
                </span>
              )}
            </div>
            <div className="w-full rounded-3xl">
              <input
                className="font-karla text-sm hvr-box-shadow-inset p-4 bg-violet-100 outline-0 rounded-xl w-full"
                placeholder="Your Email"
                {...register("email", {
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  required: true,
                })}
              />
              {errors.email && (
                <span className="text-red-500 font-poppins text-sm">
                  *enter valid email
                </span>
              )}
            </div>
          </section>
          <div>
            <textarea
              className="font-karla text-sm hvr-box-shadow-inset p-4 bg-violet-100 outline-0 rounded-2xl w-full"
              placeholder="Your Message"
              rows={8}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500 font-poppins text-sm">
                *message is required
              </span>
            )}
          </div>
          <motion.button
            type="submit"
            className="bg-cyan-500 rounded-3xl font-inter text-base text-white px-5 py-4 shadow-md hover:shadow-violet-300 hover:bg-cyan-900 transition-all duration-300 hvr-shrink"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      ) : (
        <p className="text-3xl md:text-4xl lg:text-5xl mt-16 text-center font-pacifico text-violet-800 leading-snug animate__animated animate__jackInTheBox">
          Thank you 😍 for getting in touch
        </p>
      )}
      <Footer />
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, "contact"),
  "contact",
  "bg-zinc-900"
);
