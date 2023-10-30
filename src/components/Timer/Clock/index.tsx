import style from "./Clock.module.scss"

interface Props {
    tempo: number | undefined
}

export default function Clock({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo/60) //Função de JS que retorna o menor número inteiro dentre o número
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,"0"); //Preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido.
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");    
    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}
