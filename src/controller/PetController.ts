import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entity/PetEntity";
let listaDePets: Array<TipoPet> = []; //variável necessária pq não estamos usando um banco de dados

let id = 0;
function geraId() {
    id = id + 1;
    return id;
}
export default class PetController { //exportando uma class 
    constructor(private repository: PetRepository) { }
    criaPet(req: Request, res: Response) {
        const { adotado, especie, dataDeNascimento, nome } = <PetEntity>req.body; // onovopet precisa receber as informações do TipoPet
        if (!Object.values(EnumEspecie).includes(especie)) { //if = se  x  if(!) = senão
            return res.status(400).json({ error: "Especie inválida" });
        }

        const novoPet = new PetEntity();
        novoPet.id = geraId(),
            novoPet.adotado = adotado,
            novoPet.especie = especie,
            novoPet.dataDeNascimento = dataDeNascimento,
            novoPet.nome = nome
        this.repository.criaPet(novoPet);
        return res.status(201).json(novoPet); //retorna o novoPet ao usuário com o status 201 (criado)
    }

    listaPets(req: Request, res: Response) {
        return res.status(200).json(listaDePets);
    }

    atualizaPet(req: Request, res: Response) {
        const { id } = req.params;
        const { adotado, especie, dataDeNascimento, nome } = req.body as TipoPet;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(404).json({ erro: "Pet não encontrado" });
        }

        pet.nome = nome;
        pet.dataDeNascimento = dataDeNascimento;
        pet.especie = especie;
        pet.adotado = adotado;
        return res.status(200).json(pet);
    }

    deletaPet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(404).json({ erro: "Pet não encontrado" });
        }
        const index = listaDePets.indexOf(pet);
        listaDePets.splice(index, 1);
        return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
    }
}