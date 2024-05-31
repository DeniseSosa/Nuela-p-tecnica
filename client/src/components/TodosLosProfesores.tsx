import axios from "axios";
import { useEffect, useState } from "react"
import { Profe } from "../App";


export const TodosLosProfesores = () => {
    const [profesores, setProfesores] = useState <Profe[]>([]);

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

   return (
    <div>
        <section>
            <ul>
                {

                    profesores.map(p=> {
                        return (
                         <li>
                            <a role="button">{p.nombre + " " + p.apellido}</a>
                        </li>
                        )
                    })
                    // profesores.map((p) => {
                    //     return (
                    //       <p
                    //         role="button"
                    //         style={{ cursor: "pointer" }}
                    //         key={p.id}
                    //         // onClick={() => onClickProfesor(p.id)}
                    //       ></p>)
                }
               
            </ul>
        </section>
    </div>
   )
}