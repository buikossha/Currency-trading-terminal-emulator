import React, { useState } from 'react'
import style from './Time.module.scss'

function Time() {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <p className={style.time}>{time}</p>
  )
}

export default Time
