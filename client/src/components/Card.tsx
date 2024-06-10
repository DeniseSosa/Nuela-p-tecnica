import React from "react";
import { Profe} from "../App";

  export  interface PropsProfe {

    profId: Profe ,
   
  }

export const Card : React.FC<PropsProfe> = ({profId}:PropsProfe) => {
  return (
    <div className="w-full">
     
      <hr />

      <div className=" flex flex-row m-2 p-4">
        <div className=" w-32 h-32 bg-violet-200 rounded-3xl  m-2 p-4  shadow-md">
          <div className="  flex  w-20 h-20 m-2 p-2  justify-center">
              <p className=" flex justify-center items-center text-5xl font-semibold font-sans text-indigo-500 ">{profId?.nombre.slice(0,1).concat(profId.apellido.slice(0,1))}</p>
          </div>
        </div>

      <div className="flex flex-col justify-start self-center">
        <h2 className="font-sans font-semibold text-2xl text-gray-900">{`${profId?.nombre} ${profId?.apellido}`}</h2>
        <p className="text-gray-700 underline">{profId?.mail}</p>
        <p className="text-gray-700">{profId?.telefono}</p>
      </div>

      <div className="w-full flex flex-row justify-end">
      <button className="m-4 p-4 text-indigo-500 font-semibold text-md">
        Editar
      </button>
      </div>

      </div> 
      <hr/>
    </div>
  );
};
