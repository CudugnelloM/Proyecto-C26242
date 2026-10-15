
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
function App() {
 

  return (
    <>
      <Header />
      <main>
        <Routes>  
          <Route path="/" element={<div>Bienvenido</div>} />
          <Route path= "/carrito" element={<div>Carrito</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
