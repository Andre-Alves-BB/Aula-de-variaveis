import './App.css';
import Header from './components/header';
import Filtrar from "./components/tabela";
import Modal from "./components/adcionarRegistro";
import "./components/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Filtrar />
      {/* <Modal /> */}

    </div>
  );
}

export default App;
