import React, { useState } from 'react'
import style from './SellOrder.module.scss'
import { useDispatch } from 'react-redux'
import { addNewOrderAction } from '../../redux/actions/orders.action'
import { useHistory } from 'react-router'
import moment from 'moment'

function SellOrder({ activeSell, setActiveSell, currency, sellPrice }) {

  const [value, setValue] = useState('')

  const history = useHistory()

  const dispatch = useDispatch()

  const handleClick = () => {
      const newOrder = {
        id: new Date(),
        side: 'Sell',
        price: sellPrice,
        instrument: currency,
        volume: value,
        timestamp: moment(Date.now()).format('M-D-Y h:m:s'),
        color: 'red'
    }

    dispatch(addNewOrderAction(newOrder))

    setActiveSell(false)
    history.push('/archive')
  }


  return (
    <div className={activeSell ? `${style.modal} ${style.active}` : style.modal} >
      <div className={style.modal_content} onClick={e => e.stopPropagation()}>

        <div className={style.header__section}>
          <p>Make order</p>
          <button className={style.close} onClick={() => setActiveSell(false)}></button>
        </div>

        <div className={style.info__section}>
          <h2>SELL</h2>
          <p>{sellPrice} {currency}</p>
        </div>

        <div className={style.input__section}>
          <p>Volume</p>
          <input type="text" name="volume" onChange={(e) => setValue(e.target.value)}/>
        </div>

        <div className={style.butons__section}>
          <button className={style.cansel__button} onClick={() => setActiveSell(false)}>Cancel</button>
          <button className={style.save__button} onClick={handleClick}>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default SellOrder
