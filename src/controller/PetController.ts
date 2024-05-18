import { Request, Response } from 'express';
import type TipoPet from '../tipos/TipoPet';
import EnumEspecie from '../enum/EnumEspecie';
import PetRepository from '../repositories/PetRepository';
import PetEntity from '../entities/PetEntity';
let listaDePets: Array<TipoPet> = []; //variável necessária pq não estamos usando um banco de dados

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}
export default class PetController {
  //exportando uma class
  constructor(private repository: PetRepository) {}
  async criaPet(req: Request, res: Response) {
    const { adotado, especie, dataDeNascimento, nome } = <PetEntity>req.body; // onovopet precisa receber as informações do TipoPet
    if (!Object.values(EnumEspecie).includes(especie)) {
      //if = se  x  if(!) = senão
      return res.status(400).json({ error: 'Especie inválida' });
    }

    const novoPet = new PetEntity(nome, especie, dataDeNascimento, adotado);
    await this.repository.criaPet(novoPet);
    return res.status(201).json(novoPet); //retorna o novoPet ao usuário com o status 201 (criado)
  }

  async listaPets(req: Request, res: Response) {
    const listaDePets = await this.repository.listaPet();
    return res.status(200).json(listaDePets);
  }

  // PetController.ts
  async atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.atualizaPet(
      Number(id),
      req.body as PetEntity,
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async deletaPet(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.deletaPet(Number(id));

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }
}
