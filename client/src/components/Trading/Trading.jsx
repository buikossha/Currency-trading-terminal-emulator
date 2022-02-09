import React, { useEffect, useState } from 'react'
import style from './Trading.module.scss'
import Time from '../Time/Time'
import SellOrder from '../SellOrder/SellOrder'
import BuyOrder from '../BuyOrder/BuyOrder'

function Trading() {


  const [db, setDb] = useState([{
    id: 1,
    name: 'USD/EUR',
    buyPrice: Math.random().toFixed(4),
    sellPrice: Math.random().toFixed(4),
  },
  {
    id: 2,
    name: 'EUR/USD',
    buyPrice: Math.random().toFixed(4),
    sellPrice: Math.random().toFixed(4),
  }
  ]
  )

  const [activeBuy, setActiveBuy] = useState(false)
  const [activeSell, setActiveSell] = useState(false)

  const [currency, setCurrency] = useState('USD/EUR')

  const currentCurrency = db?.findIndex((el) => el.name === currency)

  const timer = () => {

    setDb([{
      id: 1,
      name: 'USD/EUR',
      buyPrice: Math.random().toFixed(4),
      sellPrice: Math.random().toFixed(4),
    },
    {
      id: 2,
      name: 'EUR/USD',
      buyPrice: Math.random().toFixed(4),
      sellPrice: Math.random().toFixed(4),
    }
    ])


  }
  console.log(db);

  useEffect(
    () => {
      const interval = setInterval(timer, 10000);
      return () => clearInterval(interval);
    },
    [db]
  );

  return (
    <>
      <div className={style.container}>
        <Time />
        <select className={style.select} onChange={(e) => setCurrency(e.target.value)}>
          {db?.map((el) => <option defaultValue={currency} key={el.id} value={el.name}>{el.name}</option>)}
        </select>
        <div className={style.price__wrapper}>
          <div className={style.buy__section}>
            <h2>BUY</h2>
            <p onClick={() => setActiveBuy(true)} >{db[currentCurrency].buyPrice}</p>
          </div>

          <div className={style.sell__section}>
            <h2>SELL</h2>
            <p onClick={() => setActiveSell(true)}>{db[currentCurrency].sellPrice}</p>
          </div>
        </div>
        <BuyOrder activeBuy={activeBuy} setActiveBuy={setActiveBuy} currency={currency} buyPrice={db[currentCurrency].buyPrice} />
      </div>
      <SellOrder activeSell={activeSell} setActiveSell={setActiveSell} currency={currency} sellPrice={db[currentCurrency].sellPrice} />
    </>
  )
}

export default Trading
