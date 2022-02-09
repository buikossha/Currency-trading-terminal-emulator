import React from 'react'
import style from './ArchiveItem.module.scss'

function ArchiveItem({side, price, instrument, volume, timestamp, color }) {
  return (
    <div className={style.item__container}>
      <p className={style.side} style={{color:`${color}`}}>{side}</p>
      <p className={style.price}>{price}</p>
      <p className={style.instrument}>{instrument}</p>
      <p className={style.volume} >{volume}</p>
      <p className={style.timestamp}>{timestamp}</p>
    </div>
  )
}

export default ArchiveItem
