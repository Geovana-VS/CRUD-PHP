import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Produto from './Produto';
import Show from './Produto/show';
import Store from './Produto/store';
import Delete from './Produto/delete';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/Produto/:id" element={<Show />} />
        <Route path="/ProdutoCreate" element={<Store />} />
        <Route path="/ProdutoUpdate/:id" element={<Store />} />
        <Route path="/ProdutoDelete/:id" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

