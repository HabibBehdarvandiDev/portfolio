import Link from "next/link";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="my-20 flex flex-col space-x-4 ">
      <div className="flex flex-col space-y-4">
        <h4 className="uppercase text-md text-primary_light font-bold">
          Contact Me
        </h4>
        <h3 className="text-headline_light font-bold text-2xl">
          Don&rsquo;t be shy! Hit me up! 👇
        </h3>

        <div className="flex flex-col space-y-6 py-8 justify-center align-middle items-start md:flex-row md:space-x-6 md:items-center">
          <Link
            className="flex space-x-4 justify-center align-middle items-center cursor-pointer"
            href={"tel:+989306688810"}
          >
            <span className=" p-4 flex justify-center align-middle items-center rounded-full text-primary_light">
              <FaPhoneAlt className="w-6 h-6 " />
            </span>
            <div className="flex flex-col space-y-3">
              <h5 className="font-bold ">Phone Number</h5>
              <p>+98 930 668 8810</p>
            </div>
          </Link>
          <Link
            className="flex space-x-4 justify-center align-middle items-center cursor-pointer"
            href={"mailto:habibcoder@proton.me"}
          >
            <span className=" p-4 flex justify-center align-middle items-center rounded-full text-primary_light">
              <IoMdMail className="w-6 h-6 " />
            </span>
            <div className="flex flex-col space-y-3">
              <h5 className="font-bold ">Email</h5>
              <p>habibcoder@proton.me</p>
            </div>
          </Link>
          <Link
            href={"https://t.me/habibetoon"}
            className="flex space-x-4 justify-center align-middle items-center cursor-pointer"
          >
            <span className=" p-4 flex justify-center align-middle items-center rounded-full text-primary_light">
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
