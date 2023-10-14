"use client";
import { useState } from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import { Footer } from "../components";
import { useForm } from "react-hook-form";
import { Email, Phone, LoadingButton, NameInput, EmailInput, MessageInput } from "../components/Contact";

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
    <div className="mt-10">
      <h2 className="font-dm-sans text-3xl md:text-4xl xl:text-5xl font-semibold mb-10 text-zinc-300 leading-tight">
        Sip some coffee <span className="hvr-float">🍵</span> and chat with me
      </h2>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-5 w-full">
        <Email />
        <Phone />
      </div>

      {!isFormSubmitted ? (
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit((data) => sendForm(data))}
        >
          <section className="flex flex-col md:flex-row gap-4">
            <NameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
          </section>
          <MessageInput register={register} errors={errors} />
          <LoadingButton loading={loading} />
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
