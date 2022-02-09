import React, { useEffect } from 'react'
import style from './Archive.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import ArchiveItem from '../ArchiveItem/ArchiveItem'
import { getOrdersAction } from '../../redux/actions/orders.action'

function Archive() {

  const orders = useSelector(state => state.orders)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrdersAction(orders))
  }, [])

  return (
    <div className={style.container}>
      <div className={style.archive__navbar}>
        <p className={style.navbar__side}>Side</p>
        <p className={style.navbar__price}>Price</p>
        <p className={style.navbar__instrument}>Instrument</p>
        <p className={style.navbar__volume}>Volume</p>
        <p className={style.navbar__timestamp}>Timestamp</p>
      </div>
      {orders?.map((el) => <ArchiveItem {...el} key={el.id} />)}
    </div>
  )
}

export default Archive
