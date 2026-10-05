import Header from "../components/Header";
import "../styles/login.css";

function Login() {
    return (
        <>
            <Header />

            <main className="login">
                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="E-mail"
                />

                <input
                    type="password"
                    placeholder="Senha"
                />

                <button>
                    Entrar
                </button>

                <p className="criar-conta">
                    Ainda não tem uma conta?{" "}
                    <a href="/cadastro">Criar conta</a>
                </p>
            </main>
        </>
    );
}

export default Login;