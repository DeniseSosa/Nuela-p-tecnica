import { Request, Response } from "express"
import { horasComplementarias } from "../../../filtros/semanal/horasComplementarias"

export const semanalComplementariasHandler= async (req: Request, res: Response) => {
    const {id}= req.params
    try {
       const semanalComplementarias =  horasComplementarias(+id) 
       res.status(200).json(semanalComplementarias)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).send("not found")
        console.log(Msg);
        res.status(500).json("server error")
        
    }
}