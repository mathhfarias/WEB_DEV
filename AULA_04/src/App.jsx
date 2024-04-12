import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  return (
        <>
          <Header titulo = "Meu site"/>
          <Outlet/>
          <Footer />
        </>
  )
}

export default App
