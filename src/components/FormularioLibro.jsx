import { useEffect, useState } from "react";
function FormularioLibro( Agregar,libroEditando,editar,setLibroEditando ){ 
    const { titulo, setTitulo } = useState("");
    const { contenido, setContenido } = useState("");
    useEffect(() => {
        if (libroEditando) {
            setTitulo(libroEditando.titulo)
            setContenido(libroEditando.contenido)
        }
    }, [libroEditando])
    const handleSubmit = (event) => {
        event.preventDefault();
         if(!titulo||!contenido)return

         if(libroEditando){
            editar({id:libroEditando.id,titulo, contenido})
            setLibroEditando(null)
         }else{
            agregar({id:Date.now(),titulo, contenido})
         }
         setTitulo("")
         setContenido("")
        }


         return(
        <form className="mb-4" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Ingrese el título" 
            value={titulo}
            onChange={(e)=> setTitulo(e.target.value)}/>
            <input type="text" 
            placeholder="Ingrese el contenido"
            value={contenido}
            onChange={(e)=> setContenido(e.target.value)}/>
            <button type="submit" className={libroEditando ? "btn btn-warning" : "btn btn-success"}>
                {libroEditando ? "Actualizar libro" : "Agregar Libro"}
            </button>
        </form>
    )
}

export default FormularioLibro;