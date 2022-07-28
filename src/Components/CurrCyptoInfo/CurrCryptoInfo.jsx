import React from 'react'
import { SingleCryptoInfo } from '../SingleCryptoInfo/SingleCryptoInfo'
import "./CurrCryptoInfo.css"

export const CurrCryptoInfo = () => {
  return (
    <section className='crypto__container'>
        <table className='crypto__table'>
            <thead>
                <tr className='crypto__header__row'>
                    <td className='Cypto__Info'>Rank</td>
                    <td className='Cypto__Info crypto__name'>Name</td>
                    <td className='Cypto__Info'>Price</td>
                    <td className='Cypto__Info'>Market Cap</td>
                    <td className='Cypto__Info'>VWAP (24Hr)	</td>
                    <td className='Cypto__Info'>Supply</td>
                    <td className='Cypto__Info'>Volume (24Hr)	</td>
                    <td className='Cypto__Info'>Change (24Hr)</td>
                </tr>
            </thead>
            <tbody>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
              <SingleCryptoInfo/>
            </tbody>
        </table>
        <div>
        <button className='action__btn'>View More</button>
        </div>
    </section>
  )
}
