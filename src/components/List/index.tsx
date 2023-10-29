
import style from "./List.module.scss"
import Item from './Item';
import { ITarefa } from "../../types/tarefa";

interface Props {
    tarefas : ITarefa[],
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}

export default function List({tarefas, selecionaTarefa}: Props) {


    const listItems = tarefas.map((item) => {
        return (
            <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa}/> //Desestrutura o objeto com spredd e disponibiliza todos os atributos
        )
    })

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {listItems}
            </ul>
        </aside>
    )
}
