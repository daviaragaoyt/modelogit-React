import estilo from "./styles.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [valorOpcoes, setValorOpcoes] = useState("0");

  function alterarClass() {
    setValorOpcoes(document.getElementById("opcoes").value);
  }

  return (
    <div className={estilo.body}>
      <div id="bloco" className={estilo.containerJedi}>
        <form id="form">
          <h2 className={estilo.texto} for="opcoes">
            Escolha uma opção:
          </h2>
          <select
            id="opcoes"
            onChange={(e) => alterarClass()}
            defaultValue={valorOpcoes}
            className={estilo.select}
          >
            <option value="0">Selecione</option>
            <option value="jedi" className={estilo.jedi}>
              JEDI
            </option>
            <option value="sith" className={estilo.sith}>
              SITH
            </option>
          </select>
          <input
            id="botaoEnviar"
            type="submit"
            className={
              valorOpcoes == "jedi" ? estilo.enviarJedi : estilo.enviarSith
            }
          />
        </form>
      </div>
    </div>
  );
}
