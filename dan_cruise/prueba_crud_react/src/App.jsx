import {Routes,Route,BrowserRouter} from 'react-router-dom'
import CrudPersonas from './components/CrudPersonas'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CrudPersonas></CrudPersonas>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
