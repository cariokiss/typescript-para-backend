import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";

let listaDePets: Array<TipoPet> = []; // variável necessária pq não estamos usando um banco de dados

export default class PetController{ // exportando uma class 
    criaPet(req: Request, res: Response){
        const { id, adotado, especie, idade, nome } = <TipoPet>req.body; // o novopet precisa receber as informações do TipoPet
        const novoPet: TipoPet = { id, adotado, especie, idade, nome };
        listaDePets.push(novoPet); // utiliza o push para inserir o novoPet na listaDePets
        return res.status(201).json(novoPet); // retorna o novoPet ao usuário com o status 201 (criado)
    }
}