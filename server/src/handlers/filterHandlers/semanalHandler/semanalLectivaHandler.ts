import { Request, Response } from "express"
import { horasLectivas } from "../../../filtros/semanal/horasLectivas"

export const semanalLectivasHandler= async (req: Request, res: Response) => {
    const {id}= req.params
    try {
       const semanalLectivas =  horasLectivas(+id) 
       res.status(200).json(semanalLectivas)
    } catch (error) {
        const Msg = error instanceof Error
        ? error.message
        : res.status(404).send("not found")
        console.log(Msg);
        res.status(500).json("server error")
        
    }
}