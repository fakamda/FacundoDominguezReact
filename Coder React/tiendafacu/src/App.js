// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a mi E-commerce'}/>
      <Footer/>
    </div>
  );
}

export default App;