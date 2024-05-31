import { PropsProfe } from "../App";
import { Card } from "../components/Card";
import { SemanalAnual } from "./SemanalAnual";


export interface HorasProfe extends PropsProfe{
  horasTotal: number
}


export const Home: React.FC<HorasProfe> = ({
  profesores,
  onClickProfesor,
  profId,
 
}: HorasProfe) => {
  return (
    <div className="w-full">
      <h2 className="flex justify-start  ml-2 pl-4 font-sans font-semibold text-2xl text-gray-900">
        Profesores
      </h2>
      <p className=" ml-2 pl-4">Crea y gestiona los profesores</p>
      <Card profId={profId} onClickProfesor={onClickProfesor} profesores={profesores} />
      <SemanalAnual profId={profId} onClickProfesor={onClickProfesor} profesores={profesores}/>
    </div>
  );
};
