"use client";

import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
    DiDatabase,
    DiAndroid,
    DiReact,
    DiStackoverflow,
} from "react-icons/di";
import { BiLogoFigma } from "react-icons/bi";
import Image from "next/image";

import z2 from "../../public/zavod/2.jpg";
import z3 from "../../public/zavod/3.jpg";

import c1 from "../../public/capstone/1.png";
import c3 from "../../public/capstone/3.png";
import c6 from "../../public/capstone/6.png";
import c15 from "../../public/capstone/15.png";

import { useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    // dark: bg - gray - 900;
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="flex flex-col gap-8 bg-white px-5 md:px-32 lg:px-48 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
                <section>
                    <nav className="py-10 mb-12 flex justify-between">
                        <h1 className="text-xl dark:text-white dark:font-black">
                            isPhaseShape
                        </h1>
                        <ul className="flex items-center">
                            <li>
                                {darkMode ? (
                                    <BsSunFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="cursor-pointer text-2xl dark:text-white hover:scale-125 hover:opacity-75"
                                    />
                                ) : (
                                    <BsFillMoonStarsFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="cursor-pointer text-2xl dark:text-white hover:scale-125 hover:opacity-75"
                                    />
                                )}
                            </li>
                            <li>
                                <a
                                    className="font-spaceGrotesk bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4"
                                    href={"/resume.pdf"}
                                    target="_blank"
                                >
                                    Resumé
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center sm:p-5 lg:p-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
                            Jose Alfred Magat
                        </h2>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                            Developer and Designer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
                            I’m a passionate Software Developer. Whether it’s
                            designing user-friendly interfaces or writing
                            efficient code.
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                        <a
                            href="https://www.linkedin.com/in/jose-alfred-magat-188705239"
                            target="_blank"
                            className="hover:scale-115 hover:opacity-75 hover:text-teal-600 dark:hover:text-white"
                        >
                            <AiFillLinkedin className="md:text-7xl" />
                        </a>
                        <a
                            href="https://github.com/phase-sys"
                            target="_blank"
                            className="hover:scale-115 hover:opacity-75 hover:text-teal-600 dark:hover:text-white"
                        >
                            <AiFillGithub className="md:text-7xl" />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/18588468/isphaseshape"
                            target="_blank"
                            className="hover:scale-115 hover:opacity-75 hover:text-teal-600 dark:hover:text-white"
                        >
                            <DiStackoverflow className="md:text-7xl" />
                        </a>
                    </div>
                    {/* <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 mx-auto overflow-hidden md:h-96 md:w-96 dark:hidden">
                        <Image layout="fill" src={deved} objectFit="cover" />
                    </div> */}
                </section>

                <section>
                    <div className="text-center">
                        <h3 className="text-3xl py-1 dark:text-white dark:font-medium">
                            Skills
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            <span className="dark:text-white">
                                I specialize in{" "}
                            </span>
                            <span className="text-teal-500">
                                Mobile & Web Development
                            </span>
                            <span className="dark:text-white">
                                , as well as{" "}
                            </span>
                            <span className="text-teal-500">
                                Layout & Design
                            </span>
                            .
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 justify-center my-5">
                        <div className="flex flex-col items-center shadow-lg p-10 rounded-xl bg-teal-500 dark:bg-gradient-to-b dark:from-cyan-500 dark:to-teal-500">
                            <DiAndroid
                                size={140}
                                className="text-white dark:text-gray-900 p-5"
                            />
                            <h3 className="text-white text-center text-lg font-medium pb-2 dark:text-gray-900">
                                Mobile Development
                            </h3>
                        </div>
                        <div className="flex flex-col items-center shadow-xl p-10 rounded-xl bg-teal-500 dark:bg-gradient-to-b dark:from-cyan-500 dark:to-teal-500">
                            <DiReact
                                size={140}
                                className="text-white dark:text-gray-900 p-5"
                            />
                            <h3 className="text-white text-center text-lg font-medium pb-2 dark:text-gray-900">
                                Web Development
                            </h3>
                        </div>
                        <div className="flex flex-col items-center shadow-xl p-10 rounded-xl bg-teal-500  dark:bg-gradient-to-b dark:from-cyan-500 dark:to-teal-500">
                            <DiDatabase
                                size={140}
                                className="text-white dark:text-gray-900 p-5"
                            />
                            <h3 className="text-white text-center text-lg font-medium pb-2 dark:text-gray-900">
                                Database Management
                            </h3>
                        </div>
                        <div className="flex flex-col items-center shadow-xl p-10 rounded-xl bg-teal-500  dark:bg-gradient-to-b dark:from-cyan-500 dark:to-teal-500">
                            <BiLogoFigma
                                size={140}
                                className="text-white dark:text-gray-900 p-5"
                            />
                            <h3 className="text-white text-center text-lg font-medium pb-2 dark:text-gray-900">
                                Design
                            </h3>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="text-center">
                        <h3 className="text-3xl py-1 dark:text-white dark:font-medium">
                            Portfolio
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            <span className="dark:text-white">
                                These are some of the{" "}
                                <span className="text-teal-500">Projects</span>{" "}
                                I've worked on
                            </span>
                            <span className="dark:text-white">
                                , and some of them are available on{" "}
                            </span>
                            <span className="text-teal-500">
                                <a
                                    href="https://github.com/phase-sys"
                                    target="_blank"
                                    className="hover:text-lg hover:text-teal-600"
                                >
                                    GitHub
                                </a>
                            </span>
                            .
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center justify-center">
                        <div className="basis-1/3">
                            <Image
                                className="rounded-lg object-fill"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={z2}
                            />
                        </div>
                        <div className="basis-1/3">
                            <Image
                                className="rounded-lg object-fill"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={c6}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
