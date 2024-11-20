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
           <div className="w-full bg-center bg-cover md:left-0 md:top-0 text-white" style={{backgroundImage: `url(${Banner.src})`}}>
               <div className="pt-24 2xl:pt-44">
                    <h1 className="text-center text-2xl md:text-4xl 2xl:text-6xl font-bold">What&apos;s Happening <br/> in Stress<span className="text-[#CF5BFF]"> Capital</span>?</h1>

                    {/* All Article */}
                    <div className="mx-12 md:mx-72 pt-1">
                        {/* Article */}
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <a className="text-xl md:text-3xl leading-6 2xl:text-4xl hover:text-[#CF5BFF] hover:bg-white">Apa itu GameFi?</a>
                            <h1 className="text-xs md:text-sm pt-2">GameFi adalah gabungan dari game (permainan) dan finance (keuangan) dalam bentuk aplikasi terdesentralisasi (dApps). GameFi memungkinkan pemain memiliki item dalam game yang terverifikasi menggunakan teknologi blockchain.</h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">rybim | Posted 18/11/24</h1>
                        </div>
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <a className="text-xl md:text-3xl leading-6 2xl:text-4xl hover:text-[#CF5BFF] hover:bg-white">Jenis Jenis Node dalam Blockchain</a>
                            <h1 className="text-xs md:text-sm pt-2">Node adalah komputer yang terhubung ke jaringan blockchain, berfungsi untuk memastikan keamanan dan integritas jaringan. Misalnya, dalam jaringan Bitcoin, node berkomunikasi dalam sistem peer-to-peer.
                            </h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">rybim | Posted 03/10/24</h1>
                        </div>
                        {/* Article */}
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <a className="text-xl md:text-3xl leading-6 2xl:text-4xl hover:text-[#CF5BFF] hover:bg-white">WEB3 Jobs</a>
                            <h1 className="text-xs md:text-sm pt-2">Barang kali banyak yang nanya, gimana sih klo modal kecil di crypto? gimana sih klo memperbanyak asset selain trading dan menunggu airdrop yang kadang tidak pasti? Jawabannya adalah Web3 Jobs! Pekerjaan di dunia Web3 memiliki bagian yang sangat vital bagi kelangsungan projek, dan komunitas. Pekerjaan ini bukan hanya bisa membantu bahkan bisa menjadi sumber utama mu loh! kadang gajinya bs mencapai ribuan dollar!</h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">orpheuzkaze | Posted 02/02/24</h1>
                        </div>
                        {/* Article */}
                        <div className="pt-10 2xl:pt-16">
                            {/* Title */}
                            <a className="text-xl md:text-3xl leading-6 2xl:text-4xl hover:text-[#CF5BFF] hover:bg-white">APA ITU SHITCOIN?</a>
                            <h1 className="text-xs md:text-sm pt-2">istilah &apos;Shitcoin&apos; atau koin micin adalah token cryptocurrency yang sedang tren dan populer. Meski istilah ini terdengar kasar, jangan salah paham. Ini bukan berarti koin tersebut buruk atau tidak bernilai, melainkan lebih merujuk pada koin yang mungkin tidak memiliki utilitas atau fungsi yang jelas, namun memiliki potensi pertumbuhan yang besar.
                            </h1>
                            {/* Name */}
                            <h1 className="text-xs md:text-sm pt-2 2xl:text-xl text-[#CF5BFF]">rybim | Posted 30/01/24</h1>
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