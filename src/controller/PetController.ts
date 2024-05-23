import { Request, Response } from 'express';
import EnumEspecie from '../enum/EnumEspecie';
import PetRepository from '../repositories/PetRepository';
import PetEntity from '../entities/PetEntity';
import EnumPorte from '../enum/EnumPorte';
import { TipoRequestBodyPet, TipoRequestParamsPet, TipoResponseBodyPet } from '../tipos/tiposPet';

export default class PetController {
  //exportando uma class
  constructor(private repository: PetRepository) {}
  async criaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>,
  ) {
    const { adotado, especie, dataDeNascimento, nome, porte } = <PetEntity>req.body; // onovopet precisa receber as informações do TipoPet

    const novoPet = new PetEntity(nome, especie, dataDeNascimento, adotado, porte);
    await this.repository.criaPet(novoPet);
    return res.status(201).json({ dados: { id: novoPet.id, nome, especie, porte } }); //retorna o novoPet ao usuário com o status 201 (criado)
  }

  async listaPets(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>,
  ) {
    const listaDePets = await this.repository.listaPet();
    const dados = listaDePets.map((pet) => {
      return {
        id: pet.id,
        nome: pet.nome,
        especie: pet.especie,
        porte: pet.porte !== null ? pet.porte : undefined,
      };
    });
    return res.status(200).json({ dados });
  }

  // PetController.ts
  async atualizaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>,
  ) {
    const { id } = req.params;
    await this.repository.atualizaPet(Number(id), req.body as PetEntity);
    return res.sendStatus(204);
  }

  async deletaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>,
  ) {
    const { id } = req.params;
    await this.repository.deletaPet(Number(id));
    return res.sendStatus(204);
  }

  async adotaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>,
  ) {
    const { pet_id, adotante_id } = req.params;
    await this.repository.adotaPet(Number(pet_id), Number(adotante_id));
    return res.sendStatus(204);
  }

  async buscaPetPorCampoGenerico(req: Request, res: Response) {
    const { campo, valor } = req.query;
    const listaDePets = await this.repository.buscaPetPorCampoGenerico(
      campo as keyof PetEntity,
      valor as string,
    );
    return res.status(200).json(listaDePets);
  }
}
