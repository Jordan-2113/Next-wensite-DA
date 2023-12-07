import type { NextPage } from "next"
import Head from "next/head"
import Typewriter from "typewriter-effect"
import HomeCard from "../components/home/card"
import NavBar from "../components/nav"

const Home: NextPage = () => {

  function removeHeight(event: React.MouseEvent) {
    (event.currentTarget as Element)?.classList.replace("h-screen", "h-[50vh]")
  }

  return (
    <>
      <Head>
        <title>stealthy website</title>
        <link rel="icon" href="/stealthysmile.ico"/>
        <meta content="Stealthy.dev" property="og:title"/>
        <meta content="Welcome to the website of stealthninja. Welcome home." property="og:description"/>
        <meta content="https://stealthy-dev.vercel.app/" property="og:url"/>
        <meta content="https://stealthy-dev.vercel.app/stealthysmile.png" property="og:image"/>
        <meta content="#000000" data-react-helmet="true" name="theme-color" />
      </Head>
      <div className="bg-slate-900 text-white h-screen scrollbar  scrollbar-thumb-black scrollbar-track-gray-900 ">
      
      <NavBar/>

        <div onMouseOver={removeHeight} className="transition-[height] ease-in-out hover:h-[50vh] ml-10 text-5xl flex items-center justify-center h-screen bg-slate-900">
          <Typewriter options={{
            strings: ["Programming", "Gaming", "Designing", "[{Stealthy.dev}]", "stealthninja"],
            autoStart: true,
            loop: true,
          }} />
        </div>

        <div className="text-4xl text-center bg-black">
          <h1>Projects</h1>
          <div className="flex flex-col md:flex-row bg-black">

            <HomeCard
              name="stealthy bot"
              banner="/stealthybot.png"
              text="stealthy bot is a discord general bot, it has many features. This was the first project ive ever worked on. still alot more to do tho."
              onClickEvent={
                () => {
                  window.location.replace("https://github.com/realstealthninja/Stealthybot");
                }}
            />
            <HomeCard
            name="stealthy website"
            banner="/website.png"
            text="the project im very proud to start, this has been a long time coming. My first ever project in nextjs + tailwind + typescript"
            onClickEvent={
              () => {
                  window.location.replace("https://github.com/realstealthninja/stealthy-website")
              }
            }/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
