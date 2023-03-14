// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Footer from './Components/Footer/Footer';
import Prueba from './Components/clase5';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a mi E-commerce'}/>
      <Prueba/>
      <Footer/>
    </div>
  );
}

export default App;