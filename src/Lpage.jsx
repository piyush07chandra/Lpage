import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import "./Lpage.css"
import photo01 from "/images/01.svg"
import photo02 from "/images/02.png"
import photo03 from "/images/03.png"
import photo04 from "/images/04.svg"
import photo05 from "/images/05.svg"
import photo06 from "/images/06.svg"
import photo07 from "/images/07.svg"
import photo08 from "/images/08.svg"
import photo10 from "/images/10.png"
import plus from "/images/plus.svg"
import discord from "/images/discord.svg"
import twitter from "/images/twitter.svg"
import logo from "/images/logo.svg"

function Lpage() {
    const backgroundImage1 = 'url(/images/09.png)'
    const backgroundImage2 = 'url(/images/cat.png)'
    const backgroundImage3 = 'url(/images/bat.png)'
    const containerStyle1 = {
        backgroundImage: backgroundImage1,
        backgroundPosition: '0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        borderRadius: '36px',
        marginTop: '24px',
        padding: '20px',
        height: '450px'
    }
    const containerStyle2 = {
        backgroundImage: backgroundImage2,
        backgroundPosition: '0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '36px',
        // paddingLeft:'24px',
        padding: '20px',
        height: '440px'
    }
    const containerStyle3 = {
        backgroundImage: backgroundImage3,
        backgroundPosition: '0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        borderRadius: '36px',
        padding: '20px',
        height: '440px'
    }

    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, [])

    return (
        <>
            <div className="w-auto h-auto ">
                <nav className="fixed top-0 w-full bg-transparent py-4 px-8 z-10 bg-black flex ">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="text-white text-lg font-semibold">
                                <a href="#"><img src={logo} /></a>
                            </div>
                            <ul className="flex space-x-8 text-lg ">
                                <a href="#"><li className="text-white p-2 hover:text-myYellow-400">FAQ</li></a>
                                <a href="#"><li className="text-white p-2 hover:text-myYellow-400">Whitepaper</li></a>
                                <a href=""><li className="text-white p-2 hover:text-myYellow-400">Blog</li></a>
                                <button className="text-white border-2 border-zinc-600 rounded-3xl p-3">Become a merchant</button>
                                <button className=" bg-myYellow-400 rounded-3xl px-5">Launch app</button>
                            </ul>
                        </div>
                    </div>
                </nav>

                <img className="m-8 ml-48 h-full w-auto " src={photo01} />

                <div className=" h-48 w-auto -mt-9 mb-40">
                    <h1 className="text-white text-center text-5xl pt-10 font-bold">Decentralized P2P <br />exchange</h1>
                    <h1 className="text-white text-center p-5">Fast, trustless, self-custodial trades with ridiculously low fees.</h1>
                    <div className="flex justify-center m-5">
                        <button className=" bg-myYellow-400 rounded-2xl px-8 p-5 hover:bg-gray-600 hover:text-red-50">Launch app</button>
                    </div>
                </div>
            </div>


            <div className="rounded-3xl">

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 bg-myGray-400 rounded-3xl m-12" data-aos="zoom-in">
                    <div className="m-10" >
                        <h1 className="text-white text-5xl mb-5 font-semibold">Start P2P trading <br />in seconds</h1>
                        <p className=" text-gray-300 ">Just connect an existing fiat and crypto wallet to begin. The perfect <br />
                            combination of convenience and self-custody.</p>
                    </div>
                    <div> <img src={photo02} /></div>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 bg-myGray-400 rounded-3xl m-12" data-aos="zoom-in">
                    <div className="m-10" >
                        <h1 className="text-white text-5xl mb-5 font-semibold">Instant, trustless trades</h1>
                        <p className="text-gray-300">Trades are fully secured using smart contracts and Chainlink AnyAPI.<br />
                            Transactions are automatically verified and settled! No manual release <br />
                            of funds needed.</p>
                    </div>
                    <div> <img src={photo03} /></div>
                </section>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 bg-myDarkblue-400 rounded-3xl m-12">

                <div>
                    <div className=" bg-myYellow-400" data-aos="zoom-in" style={containerStyle2}>
                        <div className="m-4">
                            <h1 className="text-5xl mb-5 font-semibold">Transaction fees <br /> 10x lower</h1>
                            <p className="mb-32 font-semibold">than the industry average</p>


                            <h1 className="text-5xl mb-5 font-semibold">0.35%</h1>
                            <p className=" font-semibold">for on/offramping</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-slate-900" data-aos="zoom-in" style={containerStyle3}>
                        <div className="m-3">
                            <h1 className="text-white text-5xl font-semibold">Stay fully self-<br />
                                custodial with your <br />
                                wallets and funds.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-12 bg-myGray-400 rounded-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 ml-10 py-12">
                    <h1 className=" text-gray-400 pt-2 font-bold text-lg">Our partners</h1>
                    <a href="#"><img src={photo04} /></a>
                    <a href="#"><img className="pt-3" src={photo05} /></a>
                    <a href="#"><img className="pt-2" src={photo06} /> </a>
                    <a href="#"><img src={photo07} /> </a>
                </div>
            </section>

            <div className=" bg-purple-300 pb-5">
                <h1 className="text text-5xl pl-12 pt-12 pb-8 font-semibold" >Insurance coverage from Nexus Mutual <br />the worlds leading DeFi coverage provider</h1>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 bg-myDarkblue-400 rounded-3xl m-12 " data-aos="zoom-in" style={containerStyle1}>
                    <div>  </div>

                    <div className=" bg-mySlaty-400 text-white rounded-3xl ml-24 w-full p-4">
                        <h1 className="text-2xl">Protocol cover protects against</h1>
                        <div className="flex text-lg border-b-2 border-b-zinc-600 mt-4 pb-5">
                            <h1 className="text-purple-300 text-3xl pr-3">01</h1><h1>Code being used in an unintended <br /> way (e.g., exploits, hacks)</h1>
                        </div>
                        <div className="flex text-lg border-b-2 border-b-zinc-600 mt-4 pb-5">
                            <h1 className="text-purple-300 text-3xl pr-3">02</h1><h1>Economic design failure</h1>
                        </div>
                        <div className="flex text-lg border-b-2 border-b-zinc-600 mt-4 pb-5">
                            <h1 className="text-purple-300 text-3xl pr-3">03</h1><h1>Severe oracle failure</h1>
                        </div>
                        <div className="flex text-lg border-b-2 border-b-zinc-600 mt-4 pb-5">
                            <h1 className="text-purple-300 text-3xl pr-3">04</h1><h1>Governance attacks</h1>
                        </div>
                    </div>

                    <div className=" ml-32">
                        <div className=" bg-myYellow-400 p-4 text-2xl rounded-3xl pb-8">
                            <h1 className=" font-semibold">Current coverage</h1>
                            <h1 className="pt-28 text-3xl font-semibold">238 ETH /<br /> 389.1k DAI</h1>
                        </div>

                        <div className="border-2  border-zinc-600 rounded-3xl p-12 mt-4 ">
                            <a href="#" className="text-white pl-12 flex" >learn more<img src={photo08} /></a>
                        </div>

                    </div>
                </section>
            </div>

            <div className=" bg-balck">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 bg-myGray-400 rounded-3xl m-10" data-aos="zoom-in">
                    <div className="text-white p-12">
                        <h1 className=" text-5xl">Become a P2P Merchant on Offramp.xyz</h1>
                        <p className="mt-5">Turbocharge your revenue as a P2P merchant with our simple <br />
                            onboarding process, and automated transaction reconciliation.Earn on <br />
                            arbitrage spreads and commissions!</p>
                        <a><button className="text-white border-2 border-zinc-600 rounded-3xl py-3 px-6 mt-5 ml-3">Become a merchant</button></a>
                    </div>

                    <img className=" rounded-3xl" src={photo10} />
                </section>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 bg-myDarkblue-400 rounded-3xl m-20 pt-12 text- text-white">

                <h1 className=" text-5xl m-8">Frequently Asked <br /> Questions</h1>

                <div className=" text-lg">
                    <div className="mb-6">
                        <div className="flex border-2 border-white rounded-3xl p-4"><h1 className=" mr-2 pr-56">Do I need a Wise (TransferWise) account?</h1> <img src={plus} /></div>
                    </div>
                    <div className="mb-6">
                        <div className="flex border-2 border-white rounded-3xl p-4"><h1 className=" mr-3 pr-40">Why do I need to provide my read-only API key?</h1> <img src={plus} /></div>
                    </div>
                    <div className="mb-6">
                        <div className=" flex border-2 border-white rounded-3xl p-4"><h1 className=" mr-2 pr-80">What chains do you support?</h1> <img src={plus} /></div>
                    </div>
                    <div className="mb-6">
                        <div className=" flex border-2 border-white rounded-3xl p-4"><h1 className=" mr-7 pr-64">What fiat currencies can I trade in?</h1> <img src={plus} /></div>
                    </div>
                    <div className="mb-6">
                        <div className=" flex border-2 border-white rounded-3xl p-4"><h1 className=" mr-1 pr-52">Where can I learn more about the protocol?</h1> <img src={plus} /></div>
                    </div>
                    <div >
                        <div className=" flex border-2 border-white rounded-3xl p-4"><h1 className=" mr-2 pr-72">When are you launching a token?</h1> <img src={plus} /></div>
                    </div>
                </div>
            </section>


            <footer className="bg-black">
                <div className="flex">
                    <ul className="flex space-x-4 m-9">
                        <a href="#"><li className="text-white p-2 hover:text-myYellow-400">FAQ</li></a>
                        <a href="#"><li className="text-white p-2 hover:text-myYellow-400">Whitepaper</li></a>
                        <a href=""><li className="text-white p-2 hover:text-myYellow-400">Blog</li></a>
                    </ul>

                    <ul className="flex space-x-4 ml-auto mr-8">
                        <img src={discord} />
                        <img src={twitter} />
                    </ul>
                </div>
                <a href="#"><img className="pb-5 pl-8 w-40" src={logo} /></a>

            </footer>
        </>
    )
}
export default Lpage;