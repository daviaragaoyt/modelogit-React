import estilo from "./styles.module.css";

export default function Sith() {
  return (
    <>
      <div className={estilo.body}>
        <form action="https://linktree-two-liard.vercel.app/">
          <div className={estilo.container}>
            <div className={estilo.login}>
              <h1 className={estilo.h1}>Bem-Vindo...</h1>
              <h3 className={estilo.h3}>Ao lado Jedi da Força!</h3>
              <h2 className={estilo.h2}>Preencha o formulario por favor!</h2>
              <input
                type="text"
                className={estilo.input}
                name="nome"
                placeholder="Digite seu nome"
              />
              <input
                type="date"
                className={estilo.input}
                placeholder="Data de Nascimento"
              />
              <input
                type="email"
                className={estilo.input}
                placeholder="Digite seu email"
              />
              <input
                type="password"
                className={estilo.input}
                placeholder="Senha"
              />
              <input type="submit" className={estilo.submit} />
            </div>
            <div className={estilo.sabre} id="sabre">
              <div className={estilo["sabre-blade"]}></div>
              <div className={estilo["sabre-glow"]}></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
