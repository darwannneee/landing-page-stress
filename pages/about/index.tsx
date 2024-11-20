import Navbar from "../../components/Navbar";
import TeamData from "../../public/data/team.json";
import ModeratorData from "../../public/data/moderator.json";
import Developer from "../../public/data/developer.json"

// Import Image
import Banner from "../../assets/img/Home/banner.png";
import Banner2 from "../../assets/img/Home/banner2.png";
import LogoFinal from "../../assets/img/Home/logo_final.png";
import GithubImage from "../../assets/img/Home/github.png";
import DiscordImage from "../../assets/img/Home/discord.png";
import TwitterImage from "../../assets/img/Home/twitter.png";

import localFont from "@next/font/local";

const myFont = localFont({src : '../../assets/font/HelveticaMedExt.ttf'});

const SectionTitle = ({ title }: { title: string }) => (
    <div className="flex items-center">
        <div className="w-[140px] h-[40px] border-[#CF5BFF] border-2 text-center justify-center items-center flex rounded-xl">
            <div className={`w-[19px] h-[19px] rounded-full ${title === 'Admin' ? 'bg-[#E91E63]' : title === 'Moderator' ? 'bg-[#3498DB]' : 'bg-[#39F3ED]'}`}></div>
            <h1 className="m-2 text-sm">{title}</h1>
        </div>
        <hr className="border-t-2 border-[#CF5BFF] ml-4 md:w-[699px] my-auto" />  
    </div>
);

const TeamList = ({ data, title }: { data: any[], title: string }) => (
    <div className="pt-5">
        <SectionTitle title={title} />
        <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-10 items-center justify-center pt-8">
            {data.map((person) => (
                <div key={person.discord} className="">
                    <img src={person.url_profile} className="bg-center bg-cover md:w-96 md:h-80" />
                    <div className="flex pt-2">
                        <h1 className="text-sm flex-grow">{person.name}</h1>
                        <div className="flex">
                            <img src={DiscordImage.src} className="w-5 h-5 filter brightness-0 invert" />
                            <img src={TwitterImage.src} className="w-5 h-5 filter brightness-0 invert" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function About() {
    return (
        <main className={myFont.className} style={{backgroundColor: `#0F0F10`}}>
            <Navbar />
            <div className="w-full h-screen bg-center bg-cover md:left-0 md:top-0" style={{backgroundImage: `url(${Banner.src})`}}>
                <div className="pt-16 md:pt-20 2xl:pt-28 justify-center md:flex items-center text-center md:text-left">
                    <img src={LogoFinal.src} className="w-48 md:w-56 md:h-56 mx-auto md:mx-0" />
                    <div>
                        <h1 className="text-3xl md:text-6xl text-white">STRESS <br /> 
                            <span className="text-[#CF5BFF]">CAPITAL</span>
                        </h1>
                    </div>
                </div>
                <div className="bg-[#272727] md:w-[1103px] md:h-[463px] 2xl:w-[1800px] 2xl:h-[850px] w-96 mx-auto bg-opacity-75 rounded-2xl">
                    <div className="text-white md:mx-12 mx-8 py-8 2xl:py-10">
                        <div>
                            <h1 className="md:text-[40px] text-4xl 2xl:text-6xl">What is...</h1>
                            <h1 className="md:text-[12px] text-xs mx-2 pt-5 md:pt-3 2xl:text-xl 2xl:pt-4">
                                Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization DAO specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the admin, moderator, and collaboration manager, works cohesively to achieve these objectives.
                            </h1>
                        </div>
                        <div className="pt-8">
                            <h1 className="md:text-[40px] text-4xl 2xl:text-6xl">Our History</h1>
                            <h1 className="md:text-[12px] text-xs mx-2 pt-2 md:pt-3 2xl:text-xl 2xl:pt-4">
                                Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization (DAO) specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.
                                <br />
                                <br />
                                Stress Capital, headquartered in Indonesia, is a dynamic decentralized autonomous organization (DAO) specializing in the crypto and NFT sectors. Our primary goal is to facilitate the inclusion of Indonesian individuals into the cryptocurrency space by offering educational resources on the broader crypto ecosystem and fostering participation in international projects. Our diverse team of 32 professionals, including the founder, admin, moderator, and collaboration manager, works cohesively to achieve these objectives.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-center bg-cover" style={{backgroundImage: `url(${Banner2.src})`, backgroundSize: `1920px 1090px`, backgroundRepeat: `no-repeat`}}>
                <div className="mx-20 md:mx-56 text-white pt-96 2xl:pt-[300px] md:pt-10">
                    <TeamList data={TeamData} title="Admin" />
                    <TeamList data={ModeratorData} title="Moderator" />
                    <TeamList data={Developer} title="Developer" />
                    <TeamList data={[{name: 'John Doe', url_profile: GithubImage.src, discord: 'john_doe'}, {name: 'John Doe', url_profile: GithubImage.src, discord: 'john_doe_2'}, {name: 'John Doe', url_profile: GithubImage.src, discord: 'john_doe_3'}]} title="Collab Manager" />
                </div>
                <div className="pt-40 text-white mx-8">
                    <h1 className="text-center text-[32px] leading-9 2xl:text-[49px] 2xl:leading-[56px]">Feel free to contact us for any inquiries. <br />Our team will never ask for private informations. </h1>
                    <h1 className="text-center text-[26px] 2xl:text-[39px] py-10">&quot;Don&apos;t trust, <span className="text-[#CF5BFF]">verify</span>&quot; </h1>
                </div>
            </div>
        </main>
    );
}
