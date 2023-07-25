import estilo from "./styles.module.css";

export default function Jedi() {
  return (
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
              required
            />
            <input
              type="date"
              className={estilo.input}
              placeholder="Data de Nascimento"
              required
            />
            <input
              type="email"
              className={estilo.input}
              placeholder="Digite seu email"
              required
            />
            <input
              type="password"
              className={estilo.input}
              required
              placeholder="Senha"
            />
            <input className={estilo.submit} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
