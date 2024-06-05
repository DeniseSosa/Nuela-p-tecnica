import { Request, Response } from "express"
import { anualComplementarias } from "../../../filtros/anual/anualComplementarias"

export const anualComplementariasHandler= async (req: Request, res: Response) => {
    const {id}= req.params
    try {
       const anualComp =  anualComplementarias(+id) 
       res.status(200).json(anualComp)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).send("not found")
        console.log(Msg);
        res.status(500).json("server error")
        
    }
}