
import { NavBar } from "./views/NavBar"
import { Home, Profesores } from "./views/Home"
import { Routes, Route } from "react-router-dom"
import  { useEffect, useState } from "react"
import axios from "axios"
import { SemanalAnual } from "./views/SemanalAnual"
import { TodosLosProfesores } from "./components/TodosLosProfesores"

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
// const [horasTotal,setHorasTotal]= useState <number>(0)





    const handleClickProfesor = async (id:string) => {
      try {
        const response = await axios.get(`http://localhost:3001/profesores/${id}`)
        if(response.data)  
        setProfId(response.data)
             
    } catch (error) {
        console.log(error);
        
    }
    }
     
// const handlefilterSemanal = async() => {
//   try {
//     const response= await axios.get(`http://localhost:3001/cursos/profesores/${profId?.id}/semanal`)
//     if(!response.data) throw new Error("sin datos")
//       setHorasTotal(response.data)
//     console.log(horasTotal);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
    

  return (
    <div className="flex flex-row">
      
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home profesores={profesores} profId={profId} />}/>
      <Route path="/profesores" element={<TodosLosProfesores onClickProfesor={handleClickProfesor}/>}/>
    </Routes>
    
    

    </div>

  
  )
}

export default App
