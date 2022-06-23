import logo from './logo.svg';
import './App.css';
import lincoln from './img/mgcL.jpg';

function App() {
  function message(){
    alert("Boa noite!")
  }
  return (
    <div className="App">
      <h1> Ola! Bem vindo! Eu sou O Lincoln! </h1>
        <img src={lincoln} className='fotoPerfil' alt='Lincoln-foto' />
        <p>Esse é o meu primeiro site React!</p>
        <button className='buttonAlert' onClick={message}>Aperte esse Botão</button>
    </div>
  );
}

export default App;
