"use client";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 2000); // Reset the copiedText state after 2 seconds
      })
      .catch((err) => console.error("Error copying text:", err));
  };

  return (
    <section id="contact" className="my-20 flex space-x-4 md:max-w-screen-md">
      <div className="flex flex-col space-y-4">
        <span className="uppercase text-md text-primary_light font-bold">
          Contact Me
        </span>
        <h3 className="text-headline_light font-bold text-2xl">
          Don&rsquo;t be shy! Hit me up! 👇
        </h3>

        <div className="flex space-x-6 py-8">
          <Link
            className="flex space-x-4 justify-center align-middle items-center cursor-pointer"
            href={"tel:+989306688810"}
          >
            <span className="w-12 h-12 bg-white p-4 flex justify-center align-middle items-center rounded-full shadow-md shadow-blue-200 text-primary_light">
              <FaPhoneAlt className="w-6 h-6 " />
            </span>
            <div className="flex flex-col space-y-3">
              <h5 className="font-bold ">Phone Number</h5>
              <p>+98 930 668 8810</p>
            </div>
          </Link>
          <Link
            className="flex space-x-4 justify-center align-middle items-center cursor-pointer"
            href={"mailto:habibbehdarvandi@skiff.com"}
          >
            <span className="w-12 h-12 bg-white p-4 flex justify-center align-middle items-center rounded-full shadow-md shadow-blue-200 text-primary_light">
              <IoMdMail className="w-6 h-6 " />
            </span>
            <div className="flex flex-col space-y-3">
              <h5 className="font-bold ">Email</h5>
              <p>habibbehdarvandi@skiff.com</p>
            </div>
          </Link>
          <Link
            href={"https://t.me/habibetoon"}
            className="flex space-x-4 justify-center align-middle items-center cursor-pointer"
          >
            <span className="w-12 h-12 bg-white p-4 flex justify-center align-middle items-center rounded-full shadow-md shadow-blue-200 text-primary_light">
              <FaTelegramPlane className="w-6 h-6 " />
            </span>
            <div className="flex flex-col space-y-3">
              <h5 className="font-bold ">Telegram ID</h5>
              <p>@Habibetoon</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
