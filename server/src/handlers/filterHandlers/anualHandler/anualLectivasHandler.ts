import { Request, Response } from "express"
import { anualLectivas } from "../../../filtros/anual/anualLectivas"

export const anualLectivasHandler= async (req: Request, res: Response) => {
    const {id}= req.params
    try {
       const anualLect =  anualLectivas(+id) 
       res.status(200).json(anualLect)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).send("not found")
        console.log(Msg);
        res.status(500).json("server error")
        
    }
}