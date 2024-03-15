import myAvatar from "@/public/images/avatar.jpg";
import WavingHand from "@/public/images/emojies/waving_hand.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiMui, SiPrisma, SiTailwindcss } from "react-icons/si";
import { TbApi, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

const Intro = () => {
  return (
    <section className="flex flex-col w-full px-4 my-8 lg:my-20">
      <div className=" flex flex-col-reverse lg:flex-row lg:space-x-3 lg:justify-center">
        <div className="flex flex-col items-center justify-center space-y-4 lg:max-w-lg">
          <div className="flex space-x-4 my-4">
            <h1 className="text-nowrap text-3xl md:text-4xl font-bold text-headline_light">
              Full-Stack <br /> NextJS Developer
            </h1>
            <Image
              className="mt-10 wave_hand"
              src={WavingHand}
              alt="waving hand"
              width={40}
              height={40}
            />
          </div>
          <p className="text-paragraph_light text-center">
            Hi, I&rsquo;m Habib Behdarvandi. A passionate Full-Stack Developer
            based in Tehran, Iran. 📍
          </p>
          <div className="flex space-x-4 ">
            <Link
              href={
                "https://www.linkedin.com/in/habib-behdarvandi-7012152ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              className=" text-paragraph_light hover:text-primary_light"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link
              href={"https://github.com/HabibBehdarvandiDev"}
              className=" text-paragraph_light hover:text-primary_light"
            >
              <FiGithub className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="self-center">
          <Image
            src={myAvatar}
            alt="avatar"
            width={400}
            height={400}
            className="rounded-3xl shadow-sm shadow-zinc-200"
          />
        </div>
      </div>
      <div className="flex flex-col items-center align-middle justify-center my-5 lg:flex-row lg:my-20">
        <h4 className="text-nowrap">Tech Stack</h4>
        <div className="separator rotate-90 m-4 lg:rotate-0"></div>
        <div className="w-full grid grid-cols-3 gap-4 lg:grid-cols-6 lg:grid-rows-3 lg:max-w-2xl xl:w-fit xl:max-w-full xl:flex xl:justify-center xl:gap-5">
          <div className="flex justify-center float">
            <FaHtml5 className="w-12 h-12 text-[#E34F26]" />
          </div>
          <div className="flex justify-center float">
            <FaCss3 className="w-12 h-12 text-[#1572B6]" />
          </div>
          <div className="flex justify-center float">
            <DiJavascript1 className="w-12 h-12 text-[#F7DF1E]" />
          </div>
          <div className="flex justify-center float">
            <TbBrandTypescript className="w-12 h-12 text-[#007ACC]" />
          </div>
          <div className="flex justify-center float">
            <FaReact className="w-12 h-12 text-[#61DAFB]" />
          </div>
          <div className="flex justify-center float">
            <TbBrandNextjs className="w-12 h-12 text-headline_light" />
          </div>
          <div className="flex justify-center float">
            <SiTailwindcss className="w-12 h-12 text-[#38B2AC]" />
          </div>
          <div className="flex justify-center float">
            <FaBootstrap className="w-12 h-12 text-[#7952B3]" />
          </div>
          <div className="flex justify-center float">
            <SiPrisma className="w-12 h-12 text-[#2D3748]" />
          </div>
          <div className="flex justify-center float">
            <FaNodeJs className="w-12 h-12 text-[#339933]" />
          </div>
          <div className="flex justify-center float">
            <TbApi className="w-12 h-12 text-[#7bd27b]" />
          </div>
          <div className="flex justify-center float">
            <AiOutlineAntDesign className="w-12 h-12 text-[#40aae7]" />
          </div>
          <div className="flex justify-center float col-span-3 lg:col-span-1">
            <SiMui className="w-12 h-12 text-[#0081CB]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

/* 
<section className="intro flex flex-col justify-center items-center space-y-4 py-12 h-screen">
      <div className="pb-10">
        <div className="flex space-x-5">
          <div className="intro_caption flex flex-col space-y-5">
            <div className="intro_content flex space-x-4 items-center">
              <h1 className="font-bold text-5xl">
                Full-Stack <br /> NextJS Developer
              </h1>
              <Image
                className="mt-10"
                src={WavingHand}
                alt="waving hand"
                width={40}
                height={40}
              />
            </div>
            <p className="text-paragraph_light">
              Hi, I&rsquo;m Habib Behdarvandi. A passionate Full-Stack Developer
              based in Tehran, Iran. 📍
            </p>
            <div className="flex space-x-4">
              <Link
                href={
                  "https://www.linkedin.com/in/habib-behdarvandi-7012152ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
                className="text-headline_light hover:text-primary_light transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
              <Link
                href={"https://github.com/HabibBehdarvandiDev"}
                className="text-headline_light hover:text-primary_light transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden float">
            <Image src={myAvatar} alt="avatar" width={400} height={400} />
          </div>
        </div>
        <div className="flex align-middle justify-start items-center space-x-3 mt-14">
          <h4 className="text-nowrap">Tech Stack</h4>
          <div className="separator"></div>
          <div className="techs flex space-x-3">
            <div className="flex space-x-3 float">
              <FaHtml5 className="w-12 h-12 text-[#E34F26]" />
              <FaCss3 className="w-12 h-12 text-[#1572B6]" />
            </div>
            <div className="flex space-x-3 float">
              <DiJavascript1 className="w-12 h-12 text-[#F7DF1E]" />
              <TbBrandTypescript className="w-12 h-12 text-[#007ACC]" />
            </div>
            <div className="flex space-x-3 float">
              <FaReact className="w-12 h-12 text-[#61DAFB]" />
              <TbBrandNextjs className="w-12 h-12 text-headline_light" />
            </div>
            <div className="flex space-x-3 float">
              <SiTailwindcss className="w-12 h-12 text-[#38B2AC]" />
              <FaBootstrap className="w-12 h-12 text-[#7952B3]" />
            </div>
            <div className="flex space-x-3 float">
              <SiPrisma className="w-12 h-12 text-[#2D3748]" />
            </div>
            <div className="flex space-x-3 float">
              <FaNodeJs className="w-12 h-12 text-[#339933]" />
              <TbApi className="w-12 h-12 text-[#7bd27b]" />
            </div>
            <div className="flex space-x-3 float">
              <AiOutlineAntDesign className="w-12 h-12 text-[#40aae7]" />
              <SiMui className="w-12 h-12 text-[#0081CB]" />
            </div>
          </div>
        </div>
      </div>
    </section>
     */
