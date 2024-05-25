import { PropsProfe } from "../App";
import { Card } from "../components/Card";
import { SemanalAnual} from "./SemanalAnual";

export const Profesores: React.FC<PropsProfe> = ({
  profesores,
  onClickProfesor,
  profId,
}: PropsProfe) => {
  return (
    <div className="w-full">
      <h2 className="flex justify-start  ml-2 pl-4 font-sans font-semibold text-2xl text-gray-900">
        Profesores
      </h2>
      <p className=" ml-2 pl-4">Crea y gestiona los profesores</p>
      <h2>Aqui renderizo los profesores</h2>
      {profesores.map((p) => {
        return (
          <p
            role="button"
            style={{ cursor: "pointer" }}
            key={p.id}
            onClick={() => onClickProfesor(p.id)}
          >
            {p.nombre + " " + p.apellido}
          </p>
        );
      })}
      <Card profId={profId} onClickProfesor={onClickProfesor} profesores={profesores} />
      <SemanalAnual profId= {profId}/>
    </div>
  );
};
