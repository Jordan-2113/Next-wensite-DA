import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import NavBar from "../components/nav";
const About: NextPage = () => {
  const birthday: Date = new Date(2007, 2, 14);
  let shown = false;
  function onMouseOverSpan(e: React.MouseEvent) {
    if (!e.currentTarget.getAttribute("data-bs-toggle"))
      if (shown && e.currentTarget.getAttribute("data-bs-toggle")) {
        shown = !shown;
        let id = e.currentTarget.getAttribute("data-bs-toggle");
        document.getElementById(id!);
      }
  }
  return (
    <>
      <Head>
        <title>stealthy website</title>
        <link rel="icon" href="/stealthysmile.ico" />
        <meta content="Stealthy.dev" property="og:title" />
        <meta
          content="Welcome to the website of stealthninja. Welcome home."
          property="og:description"
        />
        <meta content="https://stealthy-dev.vercel.app/" property="og:url" />
        <meta
          content="https://stealthy-dev.vercel.app/stealthysmile.png"
          property="og:image"
        />
        <meta content="#000000" data-react-helmet="true" name="theme-color" />
      </Head>
      <div className="bg-slate-900 h-screen text-white scrollbar scrollbar-thumb-black scrollbar-track-gray-900 ">
        <NavBar />
        <div className="text-4xl text-white text-center pt-10 bg-slate-900">
          <h1>About me</h1>
          <p className="text-lg mt-5 ml-5 text-left relative mr-5 md:text-xl md:mr-[10rem] md:ml-[10rem] md:text-center">
            Hello there!
            <br />
            <br />I am a{" "}
            {new Date(Date.now()).getFullYear() - birthday.getFullYear()} from
            the Indian state of Kerala. I love coding and all things related to
            computers. I was always facinated with computers. Back in fifth
            grade i saw a kid older than me code a game in scratch. I asked him
            about it and instantly fell in love. love with programming and
            computers in general that is.
            <br />
            <br />
            I&apos;ve always been one of them developers who always wanted to make a
            game but didnt know how. It&apos;s been on my bucket list.
            As of my experience; I initially started as a roblox developer with
            lua as my lanugage of choice. Slowly but surely i switched over to 
            python. I did try C# inbetween Python and Lua though it didnt go as
            planned. Now i am under the process of learning front end with Typescript
            and Next.js. Still trying to learn C# but i dont really have any motivation
            to learn it. Although not a big prioirity at the moment.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
