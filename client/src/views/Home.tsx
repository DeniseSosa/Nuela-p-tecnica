import { Profe } from "../App";
import { Card } from "../components/Card";
import { TablaDeHoras } from "./TablaDeHoras";
export  interface PropsProfe {
  // profesores: Profe[],
   profId: Profe 
  
 }

export const Home: React.FC<PropsProfe> = ({
  profId,

}: PropsProfe) => {
  return (
    <div className="">
      <h2 className="flex justify-start  ml-2 pl-4 font-sans font-semibold text-2xl text-gray-900">
        Profesores
      </h2>
      <p className=" ml-2 pl-4">Crea y gestiona los profesores</p>
      <Card profId={profId} />
      {/* <SemanalAnual profId={profId} onClickProfesor={onClickProfesor} profesores={profesores} /> */}
      <hr/>
      <TablaDeHoras profId={profId}/>
    </div>
  );
};
