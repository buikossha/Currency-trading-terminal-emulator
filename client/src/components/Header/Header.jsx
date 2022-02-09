import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.scss'

function Header() {
  return (
    <div className={style.header__container}>
      <Link to="/trading" className={style.link} >Trading</Link>
      <Link to="/archive" className={style.link} >Archive</Link>
    </div>
  )
}

export default Header
