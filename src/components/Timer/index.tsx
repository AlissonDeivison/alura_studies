import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'
import { ITarefa } from '../../types/tarefa'
import { tempoParaSegundos } from '../../common/utils/time'

interface Props {
  selecionado: ITarefa | undefined;
}


export default function Timer({ selecionado }: Props) {

  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.time) {
      setTempo(tempoParaSegundos(selecionado.time))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escola um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button text="Começar" />
    </div>
  )
}
