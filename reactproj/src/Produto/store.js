import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './style.css';

function Store() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    const name = useRef("");
    const description = useRef("");
    const price = useRef(0);
    const quantity = useRef(0);
    const purchaseDate = useRef("");
    const inStock = useRef(false);

    useEffect(() => {
        if (id) {
            async function fetchProduto() {
                try {
                    const resposta = await axios.get(`http://localhost:8000/api/produtos/${id}`);
                    const produto = resposta.data;
                    name.current.value = produto.name;
                    description.current.value = produto.description;
                    price.current.value = produto.price;
                    quantity.current.value = produto.quantity;
                    purchaseDate.current.value = produto.purchase_date;
                    inStock.current.checked = produto.in_stock;
                } catch (erro) {
                    setStatus(`Erro ao carregar produto: ${erro}`);
                }
            }
            fetchProduto();
        }
    }, [id]);

    async function gravar(e) {
        e.preventDefault();
        try {
            const json = {
                name: name.current.value,
                description: description.current.value,
                price: price.current.value,
                quantity: quantity.current.value,
                purchase_date: purchaseDate.current.value,
                in_stock: inStock.current.checked,
            };

            if (id) {
                await axios.put(`http://localhost:8000/api/produtos/${id}`, json);
                setStatus('Produto atualizado com sucesso');
            } else {
                await axios.post('http://localhost:8000/api/produtos', json);
                setStatus('Produto criado com sucesso');
            }

            navigate('/Produto');
        } catch (erro) {
            console.error(erro); 
            setStatus(`Falha: ${erro.response ? erro.response.data.message : erro.message}`);
        }
    }

    return (
        <div className="corpo">
            <form onSubmit={gravar} className='formulario'>
                <div>
                    <label>Nome:</label>
                    <input ref={name} type="text" maxLength="100" required />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input ref={description} type="text" maxLength="100" required />
                </div>
                <div>
                    <label>Preço:</label>
                    <input ref={price} type="number" min="0" required />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input ref={quantity} type="number" min="0" required />
                </div>
                <div>
                    <label>Data de Compra:</label>
                    <input ref={purchaseDate} type="date" required />
                </div>
                <div>
                    <label>
                        <input ref={inStock} type="checkbox" />
                        Em Estoque
                    </label>
                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
            <h3>{status}</h3>
            <Link to='/Produto'>Voltar</Link>
        </div>
    );
}

export default Store;
