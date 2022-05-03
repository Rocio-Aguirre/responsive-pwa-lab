import React from 'react'

const RowCoin = ({coin, i}) => {
    return (
        <tr key={i}>
            <td><img src={coin.image} alt={coin.name} style={{width:"24px"}} className="me-3"/></td>
            <td>{coin.name} <span className="text-uppercase">({coin.symbol})</span></td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default RowCoin