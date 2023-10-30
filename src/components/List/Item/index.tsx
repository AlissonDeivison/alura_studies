import { ITarefa } from "../../../types/tarefa"
import style from "./Item.module.scss"

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item(
    {
        title,
        time,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado:''} ${completado? style.itemCompletado:''}`} onClick={() => {
            !completado && selecionaTarefa({
                title,
                time,
                selecionado,
                completado,
                id
            })
        }}>
            <h3>{title}</h3>
            <span>{time}</span>
            {completado && <span className={style.concluido} aria-Label='tarefa completada'></span>}
        </li>
    )
}
