//import { AiOutlineMenu } from "react-icons/ai";
import { WiTime3 } from "react-icons/wi";
import { PiStudentBold } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiSettings } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h5 className="block  font-sans text-xl font-semibold text-gray-900">Menú</h5>
      </div>
      <nav className="flex flex-col min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        <Link to="/home">
        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <IoHomeOutline/>
          </div>
          Inicio
        </div>
        </Link>

        <Link to="/horarios">
        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <WiTime3/>
          </div>
          Horarios
        </div>
        </Link>

        <Link to="/profesores">
        <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div className="grid place-items-center mr-4">
            <PiStudentBold/>
          </div>
          Profesores
           <div className="grid place-items-center ml-auto justify-self-end">
          </div>
        </div>
        </Link>

        <Link to="/families">
        <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
         <MdFamilyRestroom/>
          </div>
          Familias
        </div>
        </Link>

        <Link to="/espacios">
        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <IoCubeOutline/>
          </div>
          Espacios
        </div>
        </Link>
       
        <Link to="/asignaturas">
        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <IoBookOutline/>
          </div>
          Asignaturas
        </div>
        </Link>

        <Link to="/notificaciones">
        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <IoIosNotificationsOutline/>
          </div>
          Notificaciones
        </div>
        </Link>

        <Link to="/settings">
        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <CiSettings/>
          </div>
          Settings
        </div>
        </Link>    
      </nav>
    </div>
    
    </>
  );
};
