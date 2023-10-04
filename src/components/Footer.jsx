import { BsDiscord, BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className='flex'>
            <div className="footer-icons flex">
                <BsTwitter size={40} />
                <BsDiscord size={40} />
                <BsFacebook size={40} />
                <BsYoutube size={40} />
            </div>
            <div className="footer-text-cont flex">
                <p className="footer-text">
                    Privacy
                </p>
                <p className="footer-text">
                    Terms of use
                </p>
            </div>
        </footer>
    )
}