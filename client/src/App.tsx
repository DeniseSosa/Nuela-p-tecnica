
import { NavBar } from "./views/NavBar"
import { Profesores } from "./views/Profesores"

import  { useEffect, useState } from "react"
import axios from "axios"

export interface Cursos {
  asignatura: string,
  tipo: "obligatoria" | "optativa",
  curso: string,
  grupo: string,
  horas_semana: string,
  espacio_regular: string
  }

  export interface Profe {
      id:string,
      nombre: string,
      apellido: string,
      telefono: string,
      mail:string,
      cursos: Cursos[]
  }

  export  interface PropsProfe {
    profesores: Profe[],
    profId: Profe | null,
    onClickProfesor: (id: string)=> void
  }

const App = () : JSX.Element=> {

    const [profesores, setProfesores] = useState <Profe[]>([]);
    const [profId, setProfId]= useState<Profe | null>({
      id:"",
      nombre: "Marta",
      apellido:"Martinez",
      mail: "profesora123@colegio.com",
      telefono: "+34 666 555 444",
      cursos:[]
})



    useEffect(()=>{
         async function data () {
            try {
                const url= 'http://localhost:3001/profesores'
                const response = await axios.get<Profe[]>(url)
                if(response.data)
                    setProfesores(response.data)  
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    data()     
        
    },[])  

    const handleClickProfesor = async (id:string) => {
      try {
        const response = await axios.get(`http://localhost:3001/profesores/${id}`)
        if(response.data)  
        setProfId(response.data)
             
    } catch (error) {
        console.log(error);
        
    }
    }
   
    

  return (
    <div className="flex flex-row">
    <NavBar/>
    <Profesores profesores ={profesores} onClickProfesor= {handleClickProfesor} profId={profId}/>

    </div>

  
  )
}

export default App
