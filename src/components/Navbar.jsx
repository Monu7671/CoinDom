import { Link } from "react-router-dom"
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { FaBarsStaggered, FaLeaf } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { useState } from "react"


export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return (

        <nav className={`flex container ${sticky && 'sticky-nav'}`}>
            <Link to='/' className="site-name">Coindom</Link>
            <button className="nav-menu-btn"
                onClick={() => setOpen(true)}><FaBarsStaggered size={30} color="white" /></button>

            <div className={`flex page-link-cont ${open ? open : 'close'}`}>
                <button className="nav-menu-btn nav-menu-cross"
                    onClick={() => setOpen(false)}><RxCross2 size={30} color="black" /></button>

                <a href="" className="page-links">Home</a>
                <a href="" className="page-links">Market</a>
                <a href="" className="page-links">Choose us</a>
                <a href="" className="page-links"> Join</a>
            </div>
            <div className="flex nav-icon-cont">
                <BsTwitter size={23} />
                <BsDiscord size={25} />
            </div>
        </nav >

    )
}