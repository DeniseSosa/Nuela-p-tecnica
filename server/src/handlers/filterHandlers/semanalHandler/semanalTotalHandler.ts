import { Request, Response } from "express"
import { horasTotales } from "../../../filtros/semanal/horasTotales"

export const semanalTotalHandler= async (req: Request, res: Response) => {
    const {id}= req.params
    try {
       const semanalTotal =  horasTotales(+id) 
       res.status(200).json(semanalTotal)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).send("not found")
        console.log(Msg);
        res.status(500).json("server error")
        
    }
}