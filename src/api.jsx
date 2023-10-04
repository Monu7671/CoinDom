
export default async function getCoins(url) {

    // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
    // `
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: 'failed to fetch',
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data
}