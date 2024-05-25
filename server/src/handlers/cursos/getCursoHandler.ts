import { getCursoController } from "../../controllers/cursos/getCursoController";
import { Request, Response } from "express";
export const getCursoHandler = (req: Request, res: Response)=>{
    const {id} = req.params;
    try {
       const getCurso = getCursoController(+id)
       res.status(200).json(getCurso)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).json("not founded")
            console.log(Msg);
        res.status(500).json("error en servidor")
        
    }
}