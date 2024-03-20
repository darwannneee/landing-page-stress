import Banner from "../../assets/img/Home/banner.png"
import Banner2 from "../../assets/img/Home/banner2.png"
import StressCapital from "../../assets/img/Home/stress.png"
import LogoFinal from "../../assets/img/Home/logo_final.png"
import Navbar from "../../components/Navbar"
// Import Image
import GithubImage from "../../assets/img/Home/github.png"
import DiscordImage from "../../assets/img/Home/discord.png"
import TwitterImage from "../../assets/img/Home/twitter.png"

import localFont from "@next/font/local";

const myFont = localFont({src : '../../assets/font/HelveticaMedExt.ttf'})

export default function Article() {
    
    return (
        <main className={myFont.className} style={{backgroundColor: `#0F0F10`}}>
        <Navbar />
           <div className="w-full bg-center bg-cover 2xl:h-screen md:left-0 md:top-0 text-white" style={{backgroundImage: `url(${Banner.src})`}}>
               <div className="pt-24 2xl:pt-44">
                    <h1 className="text-center text-2xl md:text-4xl 2xl:text-6xl font-bold">What&apos;s Happening <br/> in Stress<span className="text-[#CF5BFF]"> Capital</span>?</h1>

                    {/* All Article */}
                    <div className="mx-12 md:mx-72 pt-1">
                        {/* Article */}
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <h1 className="text-lg md:text-2xl leading-6 2xl:text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">John Doe | Posted 14h ago</h1>
                        </div>
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <h1 className="text-lg md:text-2xl leading-6 2xl:text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">John Doe | Posted 14h ago</h1>
                        </div>
                        {/* Article */}
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <h1 className="text-lg md:text-2xl leading-6 2xl:text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">John Doe | Posted 14h ago</h1>
                        </div>
                        {/* Article */}
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <h1 className="text-lg md:text-2xl leading-6 2xl:text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">John Doe | Posted 14h ago</h1>
                        </div>
                    </div>

                    {/* Button All More */}
                    <div className="text-center py-10">
                        <button className="w-32 md:w-[165px] 2xl:w-[365px] h-10 md:h-[46.31px] 2xl:h-[56px] bg-[#CF5BFF] bg-opacity-20 mt-3 2xl:mt-8 rounded-xl 2xl:text-xl ">Load More</button>
                    </div>
                    
               </div>
            </div>
        </main>
    )
}