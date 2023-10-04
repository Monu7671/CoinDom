
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.jsx"
import WhyUs from "../components/WhyUs.jsx"
import MarketUpdate from "../components/MarketUpdate.jsx"
import JoinUs from "../components/JoinUs.jsx"
import Footer from "../components/Footer.jsx"

export default function Home() {

    return (
        <div >
            {/* {loading && <p>loading................</p>}
            <button onClick={() => setPage(1)}>1</button> */}
            <header>
                <Navbar />
                <h1 className="home-title ">track and trade <span className="gradient-text">crypto currencies</span></h1>
            </header >
            <MarketUpdate />
            <WhyUs />
            <JoinUs />
            <Footer />

        </div>
    )
}
