import { Request, Response } from "express";
import { putProfesorByIdController } from "../../controllers/profesores/putProfesorByIdController";

export const putProfesorByIdHandler = (req: Request, res: Response) => {
    const {id, nombre, apellido, telefono, mail} = req.body

    try {
        const putProfesor = putProfesorByIdController(+id, nombre, apellido, telefono, mail)
        if(!putProfesor) throw new Error ("no se ha encontrado profesor")
            res.status(200).json(putProfesor)
    } catch (error) {
       const errMeg= error instanceof Error
       ? error.message
       : "unexpected error" ;
       console.log(errMeg);
       res.status(500).json({message: "error en servidor"})
  
    }
}