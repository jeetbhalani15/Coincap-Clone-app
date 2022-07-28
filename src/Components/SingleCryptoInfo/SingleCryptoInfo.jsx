import React from 'react'

export const SingleCryptoInfo = () => {
  return (
    <tr className='crypto__body__row'>
                <td className='cypto__info'>1.</td>
                <td className='cypto__info crypto__flex'>
                  <img className='crypto__img' src='https://assets.coincap.io/assets/icons/btc@2x.png'/>
                  <div className='crypto__flex__col'>
                    <span>Bitcoin</span>
                    <span>BTC</span>
                  </div>
                </td>
                <td className='crypto__info'>
                $23,060.46
                </td>
                <td className='crypto__info'>
                $440.58b
                </td>
                <td className='crypto__info'>
                $21,958.88
                </td>
                <td className='crypto__info'>
                $19.11m
                </td>
                <td className='crypto__info'>
                $16.23b
                </td>
                <td className='crypto__info'>
                +0.98%
                </td>
              </tr>
  )
}
