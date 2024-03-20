import Banner from "../../assets/img/Home/banner.png"
import Banner2 from "../../assets/img/Home/banner2.png"
import StressCapital from "../../assets/img/Home/stress.png"
import LogoFinal from "../../assets/img/Home/logo_final.png"

// Import Image
import GithubImage from "../../assets/img/Home/github.png"
import DiscordImage from "../../assets/img/Home/discord.png"
import TwitterImage from "../../assets/img/Home/twitter.png"

import localFont from "@next/font/local";

const myFont = localFont({src : '../../assets/font/HelveticaMedExt.ttf'})

export default function About() {
    return (
        <main className={myFont.className} style={{backgroundColor: `#0F0F10`}}>
            <div className="w-full h-screen bg-center bg-cover md:left-0 md:top-0" style={{backgroundImage: `url(${Banner.src})`}}>
                <div className="pt-10 justify-center md:flex items-center text-center md:text-left">
                    <img src={LogoFinal.src} className="w-48 md:w-56 md:h-56 mx-auto md:mx-0"/>
                    <div className="">
                        <h1 className="text-3xl md:text-6xl text-white">STRESS <br /> 
                            <span className="text-[#CF5BFF]">CAPITAL</span>
                        </h1>
                    </div>
                </div>
                

                <div className="bg-[#272727] md:w-[1103px] md:h-[463px] w-96 mx-auto bg-opacity-75 rounded-2xl">
                    <div className="text-white md:mx-12 mx-8 py-8" >
                        <div className="">
                            <h1 className="md:text-[40px] text-4xl">What is...</h1>
                            <h1 className="md:text-[12px] text-xs mx-2 pt-2 md:pt-0">Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization DAO specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.</h1>
                        </div>
                        <div className="pt-8">
                            <h1 className="md:text-[40px] text-4xl">Our History</h1>
                            <h1 className="md:text-[12px] text-xs mx-2 pt-2 md:pt-0">Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization (DAO) specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.
                            <br />
                            <br />
                            Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization (DAO) specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-center bg-cover" style={{backgroundImage: `url(${Banner2.src})`, backgroundSize: `1920px 1090px`, backgroundRepeat: `no-repeat`}}>
                <div className="mx-20 md:mx-56 text-white pt-96 md:pt-10">
                    <h1 className="text-4xl">Team</h1>

                    {/* Admin */}
                    <div className="mx-10 pt-10 items-center justify-center">
                        {/* Title */}
                        <div className="flex items-center">
                            <div className="md:w-[140px] h-[40px] border-[#CF5BFF] border-2 text-center justify-center items-center flex rounded-xl">
                                <div className="w-[19px] h-[19px] rounded-full bg-[#E91E63]"></div>
                                <h1 className="m-2 text-sm">Admin</h1>
                            </div>
                            {/* Line */}
                            <div>
                                <hr className="border-t-2 border-[#CF5BFF] ml-4 md:w-[699px] my-auto" />  
                            </div>
                        </div>

                        {/* List People Founder */}
                        <div className="md:flex mt-5">
                            {/* People */}
                            <div className="w-[180px]">
                                <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[180px] md:ml-8">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[180px] md:ml-8">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    {/* Moderator */}
                    <div className="mx-10 pt-10">
                        {/* Title */}
                        <div className="flex items-center">
                            <div className="w-[140px] h-[40px] border-[#CF5BFF] border-2 text-center justify-center items-center flex rounded-xl">
                                <div className="w-[19px] h-[19px] rounded-full bg-[#3498DB]"></div>
                                <h1 className="m-2 text-sm">Moderator</h1>
                            </div>
                            {/* Line */}
                            <div>
                                <hr className="border-t-2 border-[#CF5BFF] ml-4 md:w-[699px] my-auto" />  
                            </div>
                        </div>

                        {/* List People Founder */}
                        <div className="md:flex mt-5">
                            {/* People */}
                            <div className="w-[180px]">
                                <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[180px] md:ml-8">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[180px] md:ml-8">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collab Manager */}
                        <div className="mx-10 pt-10">
                            {/* Title */}
                            <div className="flex items-center">
                                <div className="w-[180px] h-[40px] border-[#CF5BFF] border-2 text-center justify-center items-center flex rounded-xl">
                                    <div className="w-[19px] h-[19px] rounded-full bg-[#39F3ED]"></div>
                                    <h1 className="m-2 text-sm">Collab Manager</h1>
                                </div>
                                {/* Line */}
                                <div>
                                    <hr className="border-t-2 border-[#CF5BFF] ml-4 md:w-[699px] my-auto" />  
                                </div>
                            </div>

                            {/* List People Founder */}
                            <div className="md:flex mt-5">
                                {/* People */}
                                <div className="w-[180px]">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[180px] md:ml-8">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[180px] md:ml-8">
                                    <div className="w-[180px] h-[180px] bg-white" />
                                    <div className="flex pt-2">
                                        <h1 className="text-sm flex-grow">John Doe</h1>
                                        <div className="flex">
                                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="pt-40 text-white mx-8">
                                <h1 className="text-center text-[32px] leading-9">Feel free to contact us for any inquiries. <br />Our team will never ask for private informations. </h1>
                                <h1 className="text-center text-[26px] py-10">"Don't trust, <span className="text-[#CF5BFF]">verify</span>" </h1>
                    </div>
                </div>
        </main>
    )
}