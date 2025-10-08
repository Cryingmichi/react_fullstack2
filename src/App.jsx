import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import FormularioLibro from './components/FormularioLibro'

function App() {
  const [libros, setLibros] = useState([])
  const [libroModificar, setLibroModificar, setLibroEditando] = useState(null)
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
  const editarLibro = (libroActualizado) => {
    setLibros(libros.map((li)=>(li.id === libroActualizado.id ? libroActualizado : li)))
  }
  return (
    <div className='container mt-3'>
      <h1>Formulario Ingreso Libros</h1>
      <FormularioLibro agregar={agregarLibro}
      libroEditando={libroModificar}
      editar={editarLibro}
      setLibroEditando={setLibroModificar}/>
      {libros.length === 0 && <p>No hay libros disponibles</p>}
      {libros.length>5 && <p>Tienes una gran cantidad de libros</p>}
      <div className='row'>
        {
          libros.map(libro => (
            <div className='col-md-4' key={libro.id}>
              <Card titulo={libro.titulo} 
              contenido={libro.contenido} 
              imagen={libro.imagen} 
              eliminar={() => eliminarLibro(libro.id)}
              modificar={ () => setLibroModificar(libro) }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
