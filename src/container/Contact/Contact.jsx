"use client";
import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
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

  const sendForm = async (data) => {
    const { name, email, message } = data;
    console.log(name, email, message);
    if (!name || !email || !message) {
      return alert("Please fill all the fields");
    }
    setLoading(true);
    //send post request to 18.222.249.158:8080/contact
    try {
      const response = await fetch(
        "https://dheereshagrwal-portfolio-backend.up.railway.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log("Success:", responseData);
      setIsFormSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold mb-10 text-zinc-300 leading-tight">
        Sip some coffee <span className="hvr-float">🍵</span> and chat with me
      </h2>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-5 w-full">
        <div className="w-full bg-rose-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer group">
          <a
            href="mailto:da11@iitbbs.ac.in"
            className="text-pink-500 font-pacifico text-sm flex items-center gap-4"
          >
            <img
              src="./email.png"
              alt="email"
              className="w-9 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:-translate-y-1"
            />
            <span>da11@iitbbs.ac.in</span>
          </a>
        </div>

        <div className="w-full bg-blue-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer group">
          <a
            href="tel:+91 9411245528"
            className="text-blue-800 font-pacifico text-sm flex items-center gap-4"
          >
            <img
              src="./mobile.png"
              alt="mobile"
              className="w-9 transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
            />
            <span>+91 9411245528</span>
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
                className="font-sora text-sm hvr-box-shadow-inset p-4 bg-zinc-800 outline-0 rounded-xl w-full text-zinc-300"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 font-sora text-sm">
                  *name is required
                </span>
              )}
            </div>
            <div className="w-full rounded-3xl">
              <input
                className="font-sora text-sm hvr-box-shadow-inset p-4 bg-zinc-800 outline-0 rounded-xl w-full text-zinc-300"
                placeholder="Your Email"
                {...register("email", {
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  required: true,
                })}
              />
              {errors.email && (
                <span className="text-red-500 font-sora text-sm">
                  *enter valid email
                </span>
              )}
            </div>
          </section>
          <div>
            <textarea
              className="font-sora text-sm hvr-box-shadow-inset p-4 bg-zinc-800 outline-0 rounded-2xl w-full text-zinc-300"
              placeholder="Your Message"
              rows={8}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500 font-sora text-sm">
                *message is required
              </span>
            )}
          </div>
          <motion.button
            type="submit"
            className={`font-inter text-base text-white px-5 py-4 shadow-md hover:bg-black hover:rounded-xl transition-all transform-gpu duration-300 hover:scale-90 ${
              loading ? "bg-black" : "bg-zinc-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      ) : (
        <p className="text-3xl md:text-4xl lg:text-5xl mt-16 text-center font-pacifico text-zinc-300 leading-snug animate__animated animate__jackInTheBox">
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
