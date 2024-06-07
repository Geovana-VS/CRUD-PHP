import {Link} from 'react-router-dom'
import './style.css';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Bem-vindo ao Sistema de Gerenciamento de Produtos</h1>
                <p>LP4 - Trabalhos Práticos</p>
            </header>
            <main className="main-content">
                <section className="intro">
                    <h2>Sobre o Projeto</h2>
                    <p>Este sistema permite a criação, atualização, visualização e exclusão de produtos. Utilizamos tecnologias como React para o frontend e Laravel para o backend.</p>
                </section>
                <section className="features">
                    <h2>Funcionalidades</h2>
                    <ul>
                        <li>
                            <Link to="/Produto">Visualizar Lista de Produtos</Link>
                        </li>
                        <li>
                            <Link to="/ProdutoCreate">Adicionar Novos Produtos</Link>
                        </li>
                        <li>
                            <Link to="/Produto" desa>Atualizar Produtos</Link>
                        </li>
                        <li>
                            <Link to="/Produto">Excluir Produtos</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Home;
