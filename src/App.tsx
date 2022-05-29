import './index.css';
import { RouteList } from './routes/RouteList'

const App = () => {
  return (
    <>
      <header className='container d-flex align-items-center justify-content-center mt-3'>
        <h2>
          Pokedéx
        </h2>
      </header>


      <div style={{height: '80vh'}}>
        <RouteList />
      </div>


      <footer>
        <div className='container d-flex align-items-center justify-content-center mt-3'>
          Criado por Breno.
        </div>
      </footer>
    </>
  )
}

export default App;