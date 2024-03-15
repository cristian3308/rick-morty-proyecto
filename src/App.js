import './componentes/pagina_principal/estilos_principal/App.css'
import CharacterList from './componentes/CharacterList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='container'>
      <div className="header">
        <h1>Rick and Morty Characters</h1>
      </div>
      <div className="content">
        <CharacterList />
      </div>
    </div>
  );
}

export default App;