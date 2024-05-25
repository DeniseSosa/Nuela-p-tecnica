import {getProfesorByIdController } from "../../controllers/profesores/getProfesorByIdController";
import { Request, Response } from "express";



export const getProfesorByIdHandler = async (req: Request, res: Response ): Promise<void> => {
    try {
        const {id} = req.params   
        // if (isNaN(Number(id))) {
        //      res.status(400).json({ message: 'ID de profesor no válido' });
        //   }

        let getProfesores  = await getProfesorByIdController(+id)
        // if(!getProfesores){
        //     throw new Error ("Profesor no encotrado")
        // }   
        res.status(200).json(getProfesores)
    
    } catch (error) {
        const errMsg = error instanceof Error 
        ? error.message 
        : 'there was an error...';
    console.error(errMsg);
      res.status(500).json({ message: 'Error interno del servidor' })
    }
}



