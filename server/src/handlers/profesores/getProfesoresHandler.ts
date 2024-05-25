import { getProfesoresController } from "../../controllers/profesores/getProfesoresController";
import { Request, Response } from "express";


export const getProfesoresHandler = async (_req: Request, res: Response)  => {
    try {
        const getProfesores  = await getProfesoresController();
        return res.status(200).json(getProfesores)
    } catch (error) {
        const errMsg = error instanceof Error 
        ? error.message 
        : 'there was an error...';
    console.error(errMsg);
    return res.status(500).json({ message: 'Error interno del servidor' })
    }
}

