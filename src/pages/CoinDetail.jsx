import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getCoins from "../api.jsx"
import Navbar from "../components/Navbar.jsx"
import DOMPurify from "dompurify";

export default function coinDetail() {
    const params = useParams()
    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadCoins() {
            setLoading(true)
            try {
                const data = await getCoins(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
                setCoin(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadCoins()
    }, [])
    console.log(coin)
    const h24 = coin.market_data ? coin.market_data.price_change_24h.toFixed(2) : ''
    const coinPrice = coin.market_data ? coin.market_data.current_price.usd.toLocaleString('en-US') : ''
    return (
        <div className="coin-detail-cont">
            <Navbar />
            {loading && <p>loading...............</p>}
            {error && <p>error.message</p>}

            <div className="container main-coin-det">
                <div className="coin-intro flex ">
                    {coin.image ? <img src={coin.image.large} alt="crypto" className="coin-detail-img" /> : null}
                    <p className="coin-detail-name">{coin.name}</p>
                    <p className="coin-rank">Rank : #{coin.coingecko_rank}</p>
                </div>
                <div className="coin-detail">
                    <div className="coin-detail-top flex">
                        <p>24th Change : <span className={h24 < 0 ? 'red-change' : 'green-change'}>{h24}</span></p>
                        <p>Price : <span className={coinPrice < 0 ? 'red-change' : 'green-change'}>${coinPrice}</span></p>
                        <p>Symbol : {coin.symbol}</p>
                    </div>
                    <p className="coin-detail-info" dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                            coin.description ? coin.description.en : ""
                        ),
                    }}></p>
                </div>
            </div>

            {/* <p>{coin.name}</p>
            <p>{coin.description?.en}</p> 
            {coin.description?.en}
            */}
        </div>
    )
}