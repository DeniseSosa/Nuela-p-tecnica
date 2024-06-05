
import { NavBar } from "./views/NavBar"
import { Home} from "./views/Home"
import { Routes, Route } from "react-router-dom"
import  { useState } from "react"
import axios from "axios"

import { TodosLosProfesores } from "./components/TodosLosProfesores"
import { OnToggle } from "./components/OnToggle"

//import { Semanal } from "./views/Semanal"

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

  // export  interface PropsProfe {
  //  // profesores: Profe[],
  //   profId: Profe ,
   
  // }

  export interface TodosLosProfesoresProps{
  onClickProfesor: (id: string)=> void
  }


const App = () : JSX.Element=> {

   // const [profesores, setProfesores] = useState <Profe[]>([]);
    const [profId, setProfId]= useState<Profe | null>({
      id:"",
      nombre: "Marta",
      apellido:"Martinez",
      mail: "profesora123@colegio.com",
      telefono: "+34 666 555 444",
      cursos:[]
})



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
    <div >
    <NavBar/>
      </div>
      <div>

        <Routes>
          <Route path="/" element={<Home  profId={profId} />}/>
          <Route path="/profesores" element={<TodosLosProfesores onClickProfesor={handleClickProfesor}/>}/>
        </Routes>
      <OnToggle profId={profId}/>
      </div>
      </div>
    
    

   

  
  )
}

export default App
