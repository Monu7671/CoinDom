import { useState, useEffect } from "react"
import getCoins from "../api.jsx"
import { FaRightFromBracket } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function MarketUpdate() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [coinData, setCoinData] = useState(null)
    const [currentPage, setPage] = useState(1)
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`


    useEffect(() => {
        async function loadCoins() {
            setLoading(true)
            try {
                const data = await getCoins(url)
                setCoinData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadCoins()
    }, [currentPage])
    console.log(coinData)
    let pageSelectorArray = []
    for (let i = 1; i < 5; i++) {
        pageSelectorArray.push(
            <button className={`page-selector ${i === currentPage ? 'current-page' : ''}`} key={i}
                onClick={() => setPage(i)}>{i}</button>
        )
    }
    let marketDataEl
    if (coinData) {
        marketDataEl = coinData.map((item, index) => {
            return (
                <Link to={`coin/${item.id}`} className="coin-link" key={index}>
                    <div className="coin-data flex" >
                        <div className="coin-pre flex">
                            <img className="coin-img" src={item.image} />
                            <p className="coin-name">{item.id}</p>
                        </div>
                        <p className="coin-price">${item.current_price.toFixed(2)}</p>
                        <p className={`coin-change ${item.price_change_percentage_24h > 0 ? 'green-change' : 'red-change '}`}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                        <p className="market-cap">${item.market_cap.toLocaleString("en-US")}</p>
                    </div>
                </Link>
            )
        })
    }
    return (
        <div className="container market-update">

            <h2 className="market-title">Market update</h2>
            <div className="market-header flex">
                <p className="market-title-sm" style={{ marginRight: '4em' }}>Coin</p>
                <p className="market-title-sm" style={{ marginLeft: '17%' }}>Price</p>
                <p className="market-title-sm" style={{ marginLeft: '17%' }}>24th Change</p>
                <p className="market-title-sm" style={{ marginLeft: '17%' }}>Market Cap</p>
            </div>

            <div className="market-data">
                {loading ? <p>Loading...</p> : marketDataEl}
            </div>
            <div className="page-selector-cont flex">
                {pageSelectorArray}
            </div>

        </div>
    )
}