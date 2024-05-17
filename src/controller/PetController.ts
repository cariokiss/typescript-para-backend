import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";
let listaDePets: Array<TipoPet> = []; // variável necessária pq não estamos usando um banco de dados

let id = 0;
function geraId() {
    id = id + 1;
    return id;
}
export default class PetController { // exportando uma class 
    criaPet(req: Request, res: Response) {
        const { adotado, especie, dataDeNascimento, nome } = <TipoPet>req.body; // o novopet precisa receber as informações do TipoPet
        if (!Object.values(EnumEspecie).includes(especie)) { // if = se  x  if(!) = senão
            return res.status(400).json({ error: "Especie inválida" });
        }

        const novoPet: TipoPet = { id: geraId(), adotado, especie, dataDeNascimento, nome };
        listaDePets.push(novoPet); // utiliza o push para inserir o novoPet na listaDePets
        return res.status(201).json(novoPet); // retorna o novoPet ao usuário com o status 201 (criado)
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