import React, { useState } from 'react'
import style from './BuyOrder.module.scss'
import { useDispatch } from 'react-redux'
import { addNewOrderAction } from '../../redux/actions/orders.action'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

function BuyOrder({ activeBuy, setActiveBuy, buyPrice, currency }) {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = () => {
    const newOrder = {
      id: Date.now(),
      side: 'Buy',
      price: buyPrice,
      instrument: currency,
      volume: value,
      timestamp: moment(Date.now()).format('M-D-Y h:m:s'),
      color: 'green'
    }

    dispatch(addNewOrderAction(newOrder))

    setActiveBuy(false)
    history.push('/archive')
  }

  return (
    <div className={activeBuy ? `${style.modal} ${style.active}` : style.modal} >
      <div className={style.modal_content} onClick={e => e.stopPropagation()}>

        <div className={style.header__section}>
          <p>Make order</p>
          <button className={style.close} onClick={() => setActiveBuy(false)}></button>
        </div>

        <div className={style.info__section}>
          <h2>BUY</h2>
          <p>{buyPrice} {currency}</p>
        </div>

        <div className={style.input__section}>
          <p>Volume</p>
          <input type="text" name="volume" onChange={(e) => setValue(e.target.value)} />
        </div>

        <div className={style.butons__section}>
          <button className={style.cansel__button} onClick={() => setActiveBuy(false)}>Cancel</button>
          <button className={style.save__button} onClick={handleClick}>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default BuyOrder
