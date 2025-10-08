import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import FormularioLibro from './components/FormularioLibro'

function App() {
  const [libros, setLibros] = useState([])
  useEffect(()=>{
    fetch("src/data/libros.json")
    .then((res)=>res.json())
    .then((data)=>setLibros(data))
    .catch((error)=>console.log(error))
  }, [])
  const agregarLibro = (libro) => {
    setLibros([...libros, libro]) //push
  }
  const eliminarLibro = (id) => {
    setLibros(libros.filter((l)=>l.id !== id))
  }
  return (
    <div className='container mt-3'>
      <h1>Formulario Ingreso Libros</h1>
      <FormularioLibro agregar={agregarLibro}/>
      <div className='row'>
        {
          libros.map(libro => (
            <div className='col-md-4' key={libro.id}>
              <Card titulo={libro.titulo} contenido={libro.contenido} eliminar={() => eliminarLibro(libro.id)}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
