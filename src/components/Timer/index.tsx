import React from 'react'
import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'

export default function Timer() {
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escola um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Clock />
        </div>
        <Button text="Começar" />
    </div>
  )
}
