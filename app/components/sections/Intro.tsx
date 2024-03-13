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
  );
};

export default Intro;
