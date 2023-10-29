import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from"./App.module.scss"
import { ITarefa } from "../types/tarefa";
function App() {

  const [to_do, setTo_do] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  
  function selecionaTarefa (tarefaSelecionada:ITarefa){
    setSelecionado(tarefaSelecionada);
    setTo_do(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true:false
    })));
  };


  return (
    <div className={style.AppStyle}>
      <Form setTo_do={setTo_do}/>
      <List 
        tarefas={to_do}
        selecionaTarefa = {selecionaTarefa}
      />
      <Timer />
    </div>
  );
}

export default App;
