import { Inter } from "next/font/google";

import Banner from "../assets/img/Home/banner.png"
import Banner2 from "../assets/img/Home/banner2.png"
import Banner3 from "../assets/img/Home/Banner3.png"
// import Navbar from "./Navbar";

// Import Image
import GithubImage from "../assets/img/Home/github.png"
import DiscordImage from "../assets/img/Home/discord.png"
import TwitterImage from "../assets/img/Home/twitter.png"

import localFont from "@next/font/local";
const myFont = localFont({src : '../assets/font/HelveticaMedExt.ttf'})

export default function Home() {
  return (
    /* banner new 1 */
    <main className={myFont.className}>
        <div className="w-full h-screen bg-center bg-cover left-0 top-0" style={{backgroundImage: `url(${Banner.src})`}}>
                {/* <Navbar /> */}

                {/* Social Media */}
                <div className="grid grid-cols-3 place-items-center pt-[570px] 2xl:pt-[950px] mx-80">
                    <div className="w-[72px] h-[72px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#D9D9D9] grid place-items-center">
                        <img src={GithubImage.src} alt="Github" className="2xl:w-20" />
                    </div>
                    <div className="w-[72px] h-[72px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#D9D9D9] grid place-items-center">
                        <img src={DiscordImage.src} alt="Discord"  className="2xl:w-20" />
                    </div>
                    <div className="w-[72px] h-[72px] 2xl:w-[130px] 2xl:h-[130px] rounded-full bg-[#D9D9D9] grid place-items-center">
                        <img src={TwitterImage.src} alt="Twitter"  className="2xl:w-20" />
                    </div>
                </div>
        </div>
        <div className="w-full h-screen bg-center bg-cover left-0 top-0 bg-black" style={{backgroundImage: `url(${Banner2.src})`}}>
                <div className="pt-56">
                    <div className="mx-[440px] text-white">
                        <h1 className="text-5xl">what is</h1>
                        <h1 className="text-8xl">STRESS <span className="text-[#CF5BFF]">CAPITAL?</span></h1>
                    </div>
                    <div className="mx-[210px] text-white pt-5">
                        <h1>Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization (DAO) specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.</h1>
                        <button className="w-[165px] h-[46.31px] bg-[#CF5BFF] bg-opacity-20 mx-96 mt-3 rounded-xl">See More</button>
                    </div>      
                </div>
        </div>
        <div className="w-full h-screen bg-center bg-cover left-0 top-0" style={{backgroundImage: `url(${Banner3.src})`}}>
            <div className="mx-24 text-white pt-10">
                <h1 className="text-[25px] font-bold text-center">Latest News</h1>
                <div className="pt-8 mx-60">
                    <h1 className=" text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iusto quod eius voluptas maxime blanditiis officia reiciendis dolorem accusamus?</h1>
                    <div className="flex pt-2">
                        <h1 className="text-[12px] text-[#CF5BFF] ">Darwan | Posted 12hrs ago</h1> 
                        <hr className="border-t-2 border-[#CF5BFF] ml-4 w-[490px] my-auto" />  
                    </div>

                    <button className="w-[165px] h-[46.31px] bg-[#CF5BFF] bg-opacity-20 mx-72 mt-6">See More</button>
                </div>
                <div className="pt-52 text-center">
                    <h1 className="text-[38px] mx-16 leading-10">"Do you want to be right or do you want to make money ?</h1>
                    <h1 className="text-[#CF5BFF] text-[24px] pt-3">Darwan 2023</h1>
                </div>
            </div>
                {/* <Navbar /> */}
        </div>
   </main>

)


}
