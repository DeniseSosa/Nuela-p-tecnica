import { useEffect, useState } from "react";

import axios from "axios";
//import { PropsProfe } from "../views/Home";
import { Profe } from "../App";

export interface OnToggleProps {
  profId: Profe;
}

export type semanal = {
  horas_total: number;
  horas_lectivas: number;
  horas_complementarias: number;
};

export const OnToggle: React.FC<OnToggleProps> = ({ profId }) => {
  const [isOn, setIsOn] = useState<boolean>(true);

  const [horasTotal, setHorasTotal] = useState<semanal>({
    horas_total: 0,
    horas_lectivas: 0,
    horas_complementarias: 0,
  });

  async function handleFilterSemanal() {
    try {
      const response = await axios.get(
        `http://localhost:3001/cursos/profesores/${profId.id}/semanal`
      );
      const response2 = await axios.get(
        `http://localhost:3001/cursos/profesores/${profId.id}/semanal/lectivas`
      );
      const response3 = await axios.get(
        `http://localhost:3001/cursos/profesores/${profId.id}/semanal/complementarias`
      );
      if (!response.data && !response2.data && !response3.data)
        throw new Error("sin datos");
      setHorasTotal({
        horas_total: response.data,
        horas_lectivas: response2.data,
        horas_complementarias: response3.data,
      });

      console.log(horasTotal);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleFilterAnual() {
    try {
      const response = await axios.get(
        `http://localhost:3001/cursos/profesores/${profId.id}/anual`
      );
      const response2 = await axios.get(
        `http://localhost:3001/cursos/profesores/${profId.id}/anual/lectivas`
      );
      const response3 = await axios.get(
        `http://localhost:3001/cursos/profesores/${profId.id}/anual/complementarias`
      );
      if (!response.data && !response2.data && !response3.data)
        throw new Error("sin datos");
      setIsOn(false);
      setHorasTotal({
        horas_total: response.data,
        horas_lectivas: response2.data,
        horas_complementarias: response3.data,
      });

      console.log(horasTotal);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFilterSemanal();
  }, [profId]);

  return (
    <div className="w-full p-4 justify-center">
      <div className="p-4 ">
        <div className="flex  justify-center p-2">
          <div className=" border-2 border-gray-300 rounded-xl bg-gray-300 p-0.5">
            <button
              className=" w-28 p-2 m-1 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-100"
              onClick={handleFilterSemanal}
            >
              Semanal
            </button>

            <button
              className=" w-28 p-2 m-1 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-100 "
              onClick={handleFilterAnual}
            >
              Anual
            </button>
          </div>
        </div>
        {isOn ? (
          <div className="flex flex-row">
            <div className="w-2/6 h-24 bg-gray-100 m-2 p-2 rounded-2xl shadow-lg ">
              <p className="font-bold text-2xl">Horas Totales</p>
              <h2>{horasTotal.horas_total}</h2>
            </div>
            <div className="w-2/6 h-24 bg-gray-100 m-2 p-2 rounded-2xl shadow-lg">
              <p className="font-bold text-2xl">Horas Lectivas</p>
              <h2>{horasTotal.horas_lectivas}</h2>
            </div>
            <div className="w-2/6 h-24 bg-gray-100 m-2 p-2 rounded-2xl shadow-lg">
              <p className="font-bold text-2xl">Horas Complementarias</p>
              <h2>{horasTotal.horas_complementarias}</h2>
            </div>
          </div>
        ) : (
          <div className="flex flex-row">
            <div className="w-2/6 h-24 bg-gray-100 m-2 p-2 rounded-2xl shadow-lg">
            <p className="font-bold text-2xl">Horas Totales</p>
              <h2>{horasTotal.horas_total}</h2>
            </div>
            <div className="w-2/6 h-24 bg-gray-100 m-2 p-2 rounded-2xl shadow-lg">
            <p className="font-bold text-2xl">Horas Lectivas</p>
              <h2>{horasTotal.horas_lectivas}</h2>
            </div>
            <div className="w-2/6 h-24 bg-gray-100 m-2 p-2 rounded-2xl shadow-lg">
            <p className="font-bold text-2xl">Horas Complementarias</p>
              <h2>{horasTotal.horas_complementarias}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
