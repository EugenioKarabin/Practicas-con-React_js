import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import html2canvas from 'html2canvas'

function App() {

  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('')

  const onChangeLinea1 = (evento) => {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = (evento) => {
    setLinea2(evento.target.value)
  }

  const onChangeImagen = (evento) => {
    setImagen(evento.target.value)
  }
  {/*Para la exportacion de la imagen se instalo una libreria llamada html2canvas*/}
  const onClickExportar = (evento) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      const img = canvas.toDataURL("image/url")
      const link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img
      link.click()
    });
  }

  return (
    <div className='App'>

      {/*Select picker de memes*/}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br />

      {/*input text primer linea*/}
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br />

      {/*input text segunda lienea*/}
      <input onChange={onChangeLinea2} type="text" placeholder='linea 2'/><br />

      {/*boton exportar*/}
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span className='texto1'>{linea1}</span><br />
        <span className='texto2'>{linea2}</span>
        {console.log(imagen)}
        <img src={"/img/" + imagen + ".jpg"} alt={imagen} />
      </div>

    </div>
  )
}

export default App
