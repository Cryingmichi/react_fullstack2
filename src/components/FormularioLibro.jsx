import { useState } from "react";
function FormularioLibro( Agregar) {
    const { titulo } = useState("");
    const { contenido } = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
         if(!titulo||!contenido)return
         agregar({id:Date.now(),titulo, contenido})
         setTitulo("")
         setContenido("")
        }

         return(
        <form className="mb-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese el título" onChange={(e)=> setTitulo(e.target.value)}/>
            <input type="text" placeholder="Ingrese el contenido" onChange={(e)=> setContenido(e.target.value)}/>
            <button type="submit" className="btn btn-success">Agregar Libro</button>
        </form>
    )
}

export default FormularioLibro;