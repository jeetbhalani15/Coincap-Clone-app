import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SingleCryptoInfo } from '../SingleCryptoInfo/SingleCryptoInfo'
import { fetchCryptoCoins } from '../../features/CryptoSlice/cryptoSlice';
import "./CurrCryptoInfo.css"

export const CurrCryptoInfo = () => {
  
  const dispatch = useDispatch();
  const {cryptoCoins} = useSelector((state)=> state.cryptoCoins)
  const [page,setPage] = useState(1)


  useEffect(()=>{
      dispatch(fetchCryptoCoins(page))
  },[page])


  return (
    <>
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
              {cryptoCoins.map((cryptoCoin)=>(
                <SingleCryptoInfo key={cryptoCoin.id} cryptoCoin={cryptoCoin} />
              ))}
            </tbody>
        </table>
    </section>
        <div className='more'>
        <button onClick={()=>setPage((pre)=>pre+1)} className='action__btn'>View More</button>
        </div>
    </>
  )
}
