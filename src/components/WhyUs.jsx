import imgChooseUs from '../images/choose-main.png'

import { FaWallet, FaBolt, FaSatelliteDish, FaChessKnight, FaBoxesStacked, FaS } from 'react-icons/fa6'
import { LiaPencilRulerSolid } from 'react-icons/lia'


export default function WhyUs() {
    return (
        <div className='container'>
            <h2 className="choose-title">Why <span className="gradient-text">choose us</span></h2>

            <div className="choose-box-cont flow">

                <div className="choose-box">
                    <button className="choose-box-btn"><FaWallet size={30} color="white" /></button>
                    <div className="choose-box-text">
                        <h3 className="choose-box-title">CONNECT YOUR WALLET</h3>
                        <p className="choose-box-para">Use Trust Wallet, Metamask or to connect to the app.</p>
                    </div>
                </div>

                <div className="choose-box">
                    <button className="choose-box-btn"><LiaPencilRulerSolid size={30} color="white" /></button>
                    <div className="choose-box-text">
                        <h3 className="choose-box-title">SELECT YOUR QUANTITY</h3>
                        <p className="choose-box-para">Upload your crypto and set a title, description and price.</p>
                    </div>

                </div>
                <div className="choose-box">
                    <button className="choose-box-btn"><FaBolt size={30} color="white" /></button>
                    <div className="choose-box-text">
                        <h3 className="choose-box-title">CONFIRM TRANSACTION</h3>
                        <p className="choose-box-para">Earn by selling your crypto on our marketplace.</p>
                    </div>
                </div>
                <img src={imgChooseUs} alt='hand holding a purple coin' className="choose-img" />
                <div className="choose-box">
                    <button className="choose-box-btn"><FaSatelliteDish size={30} color="white" /></button>
                    <div className="choose-box-text">
                        <h3 className="choose-box-title">RECEIVE YOUR OWN NFTS</h3>
                        <p className="choose-box-para">Invest all your crypto at one place on one platform.</p>
                    </div>
                </div>
                <div className="choose-box">
                    <button className="choose-box-btn"><FaChessKnight size={30} color="white" /></button>
                    <div className="choose-box-text">
                        <h3 className="choose-box-title">TAKE A MARKET TO SELL</h3>
                        <p className="choose-box-para">Discover, collect the right crypto collections to buy or sell.</p>
                    </div>

                </div>
                <div className="choose-box">
                    <button className="choose-box-btn"><FaBoxesStacked size={30} color="white" /></button>
                    <div className="choose-box-text">
                        <h3 className="choose-box-title">DRIVE YOUR COLLECTION</h3>
                        <p className="choose-box-para">We make it easy to Discover, Invest and manage.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}