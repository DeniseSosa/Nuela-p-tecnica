import { deleteProfesorByIdController } from "../../controllers/profesores/deleteProfesorByIdController"
import { Request, Response } from "express"

export const deleteProfesorByIdHandler = (req: Request, res:Response) => {
    const {id} = req.params;
    try {
        const deleteProfesor = deleteProfesorByIdController(+id)
        //if(!deleteProfesor) throw new Error("No se encontró el id solicitado")
        res.status(200).json(deleteProfesor)
        
    } catch (error) {
        const errMsg = error instanceof Error ?
        error.message
        : "unexpected error"
        console.log(errMsg);
        
    }
}