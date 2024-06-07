import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function Produto() {
    const [json, setJson] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function consultar() {
            try {
                const resposta = await axios.get("http://localhost:8000/api/produtos");
                setJson(resposta.data);
                console.log(resposta.data); // Pressione F12 e no console veja o que veio da API no backend
            } catch (error) {
                console.error("Erro ao consultar a API:", error);
            }
        }

        consultar();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/produtos/${id}`);
            setJson(json.filter(item => item.id !== id)); 
        } catch (error) {
            console.error("Erro ao excluir o produto:", error);
        }
    };

    return (
        <div className='corpo'>
            <Link to='/ProdutoCreate'>Novo Produto</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {json.map((x) => (
                        <tr key={x.id}>
                            <td>{x.name}</td>
                            <td>{x.description}</td>
                            <td>{x.quantity}</td>
                            <td>{x.price}</td>
                            <td>
                                <button onClick={() => navigate("/ProdutoUpdate/" + x.id)}>Alterar</button>
                                &nbsp;
                                <button onClick={() => handleDelete(x.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default Produto;

