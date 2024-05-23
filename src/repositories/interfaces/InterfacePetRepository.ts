import PetEntity from '../../entities/PetEntity';
import EnumPorte from '../../enum/EnumPorte';

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void;

  listaPet(): Array<PetEntity> | Promise<PetEntity[]>; // o pipe | é um simbolo de união

  atualizaPet(id: number, pet: PetEntity): void;

  deletaPet(id: number): void;

  adotaPet(idPet: number, idAdotante: number): void;

  buscaPetPorCampoGenerico<Tipo extends keyof PetEntity>(
    campo: Tipo,
    valor: PetEntity[Tipo],
  ): Promise<PetEntity[]> | PetEntity[];
}
