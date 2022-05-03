import React from 'react'
import Table from 'react-bootstrap/Table'
import RowCoin from './RowCoin'

const columns = [
    "",
    "Moneda",
    "Precio",
    "Cambio de precio (%)",
    "Volumen de 24 hs "
]
const ListCoins = ({coins, search}) => {
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));
    return (
        <Table className='table table-light mt-4 table-hover noWrap' responsive>
            <thead>
                <tr>
                    {
                        columns.map((colum, id) => (
                            <td key={id}>{colum}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, i) =>(
                    <RowCoin coin={coin} key={i} i={i} />
                ))}
            </tbody>
        </Table>    
    )
}

export default ListCoins