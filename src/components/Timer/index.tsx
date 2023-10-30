import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'
import { ITarefa } from '../../types/tarefa'
import { tempoParaSegundos } from '../../common/utils/time'

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void
}


export default function Timer({ selecionado, finalizarTarefa }: Props) {

  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.time) {
      setTempo(tempoParaSegundos(selecionado.time))
    }
  }, [selecionado])

  function regressiva(contador:number = 0){
    //Função recursiva
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1);
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escola um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button text="Começar"  onClick={() => {regressiva(tempo)}} />
    </div>
  )
}
