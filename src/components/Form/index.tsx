import React, { Component } from 'react'
import Button from '../Button'
import style from "./Form.module.scss"
import { ITarefa } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid';


export default class Form extends Component<{
  setTo_do: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const novaTarefa: ITarefa = {
      title: this.state.tarefa,
      time: this.state.tempo,
      selecionado: false,
      completado: false,
      id: uuidv4()
    };
    this.props.setTo_do(tarefasAntigas => [...tarefasAntigas, novaTarefa ]);
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }

  render() {
    return (
      <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)} >
        <div className={style.inputContainer}>
          <label htmlFor='tarefa'>Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder='O que você quer estudar?'
            required
            value={this.state.tarefa}
            onChange={evento => { this.setState({ ...this.state, tarefa: evento.target.value }) }}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='tempo'>Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            value={this.state.tempo}
            onChange={evento => { this.setState({ ...this.state, tempo: evento.target.value }) }}
          />
        </div>
        <Button text="Adicionar" type='submit' />
      </form>
    )
  }
}

