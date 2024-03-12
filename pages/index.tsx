import Banner from "../assets/img/Home/banner.png"
import Banner2 from "../assets/img/Home/banner2.png"
import Banner3 from "../assets/img/Home/Banner3.png"
import StressCapital from "../assets/img/Home/stress.png"
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
        <div className="w-full h-screen bg-center bg-cover md:left-0 md:top-0" style={{backgroundImage: `url(${Banner.src})`}}>
            <div>
            <div className="absolute inset-0 flex items-center justify-center">
                <img src={StressCapital.src} className="max-h-full max-w-full" alt="Gambar"/>
            </div>
                {/* Button */}
                <div className="absolute bottom-20 md:bottom-16 left-10 right-10 md:left-96 md:right-96 2xl:left-[640px] 2xl:right-[640px] mx-auto grid grid-cols-3 place-items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 rounded-full bg-[#D9D9D9] grid place-items-center">
                        <img src={GithubImage.src} alt="Github" className="w-10 md:w-14 2xl:w-20" />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 rounded-full bg-[#D9D9D9] grid place-items-center md:mt-0">
                        <img src={DiscordImage.src} alt="Discord" className="w-12 md:w-14 2xl:w-20" />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 rounded-full bg-[#D9D9D9] grid place-items-center md:mt-0">
                        <img src={TwitterImage.src} alt="Twitter" className="w-10 md:w-10 2xl:w-20" />
                    </div>
                </div>
            </div>
        </div>
    <div className="flex items-center justify-center w-full h-screen bg-center bg-cover bg-black" style={{backgroundImage: `url(${Banner2.src})`}}>
        <div className="">
            <div className="mx-6 md:mx-[440px] text-white">
                <h1 className="text-3xl md:text-5xl 2xl:text-7xl">What is</h1>
                <h1 className="text-5xl md:text-8xl 2xl:text-9xl">STRESS <span className="text-[#CF5BFF]">CAPITAL?</span></h1>
            </div>
            <div className="mx-6 md:mx-[210px] text-white pt-5 2xl:mx-[420px]">
                <h1 className="text-xs md:text-base 2xl:text-xl">Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization (DAO) specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.</h1>
                <div className="text-center">
                    <button className="w-32 md:w-[165px] 2xl:w-[365px] h-10 md:h-[46.31px] 2xl:h-[56px] bg-[#CF5BFF] bg-opacity-20 mt-3 2xl:mt-8 rounded-xl 2xl:text-xl ">See More</button>
                </div>
               
            </div>      
        </div>
    </div>
    <div className="w-full h-screen bg-center bg-cover left-0 top-0" style={{backgroundImage: `url(${Banner3.src})`}}>
        <div className="mx-4 md:mx-24 text-white pt-24">
            <h1 className="text-2xl md:text-[25px] 2xl:text-4xl font-bold text-center">Latest News</h1>
            <div className="pt-4 md:pt-8 mx-4 md:mx-60">
                <h1 className="text-sm md:text-[16px] 2xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iusto quod eius voluptas maxime blanditiis officia reiciendis dolorem accusamus?</h1>
                <div className="flex pt-2">
                    <h1 className="text-xs md:text-[12px] 2xl:text-xl text-[#CF5BFF]">Darwan | Posted 12hrs ago</h1> 
                    <hr className="border-t-2 border-[#CF5BFF] ml-4 w-[490px] my-auto" />  
                </div>
                <div className="flex justify-center mt-2 md:mt-6">
                    <button className="w-32 md:w-[165px] 2xl:w-[265px] h-10 md:h-[46.31px] 2xl:h-[56px] bg-[#CF5BFF] bg-opacity-20 rounded-xl 2xl:text-xl">See More</button>
                </div>
            </div>
            <div className="pt-28 md:pt-52 2xl:pt-96 text-center">
                <h1 className="text-4xl md:text-[38px] mx-4 md:mx-16 leading-10 2xl:text-7xl">&quot;Do you want to be right or do you want to make money ?&quot;</h1>
                <h1 className="text-2xl md:text-[24px] 2xl:text-4xl text-[#CF5BFF] pt-3 2xl:pt-7">Darwan 2023</h1>
            </div>
        </div>
    </div>

   </main>

)


}
