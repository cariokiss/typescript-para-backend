import { Request, Response } from "express";

let listaDePets = []; // variável necessária pq não estamos usando um banco de dados

export default class PetController{ // exportando uma class 
    criaPet(req: Request, res: Response){
        const novoPet=req.body; // o novopet vai receber todas as informações do corpo da requisição
        listaDePets.push(novoPet); // utiliza o push para inserir o novoPet na listaDePets
        return res.status(201).json(novoPet); // retorna o novoPet ao usuário com o status 201 (criado)
    }
}