import { Request, Response } from "express"
import { anualTotales } from "../../../filtros/anual/anualTotales"

export const anualTotalHandler= async (req: Request, res: Response) => {
    const {id}= req.params
    try {
       const anualTotal =  anualTotales(+id) 
       res.status(200).json(anualTotal)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).send("not found")
        console.log(Msg);
        res.status(500).json("server error")
        
    }
}