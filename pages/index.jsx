import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/public/jay_ardeshna_profile_crop.png";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <Head>
        <title>Jay Ardeshna ✦ Full Stack developer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-max 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
              alt="Smit"
              width="80"
              height="80"
            />
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">Jay Ardeshna</span>
                <span>
                  <Image
                    src={currentTheme === "dark" ? BooWhite : BooBlack}
                    alt="boo"
                    width="25"
                    height="25"
                  />
                </span>
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/jay-ardeshna-120902214/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@Jay Ardeshna</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8 text-justify">
              A wizard who loves develop and code. I develop modern, reactive,
              and user-friendly web applications using the latest technologies
              currently. Believe a perfect blend of user inteface architecture
              is one, where the goals and needs are accounted for in an elegant,
              efficient, and robust design of the user interface.
            </p>
          </div>
        </div>
        <div className="mx-auto transition-all duration-1000 ease-in-out w-60 mt-4">
          <Image
            // src={currentTheme === "dark" ? HeroBlack : HeroWhite}
            src={currentTheme === "dark" ? Hero : Hero}
            width={400}
            height={300}
            // layout="responsive"
            className="select-none rounded-full"
            alt="Smit Bhalani"
            priority
          />
        </div>
        <div className="mt-10 mx-auto text-center">
          <h1
            className={`mt-6 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold`}
          >
            Full Stack Developer
          </h1>
        </div>
        <div className="mt-16 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
