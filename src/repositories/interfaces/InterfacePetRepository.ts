import PetEntity from '../../entities/PetEntity';
import EnumPorte from '../../enum/EnumPorte';

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void;
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>; // o pipe | é um simbolo de união
  atualizaPet(
    id: number,
    pet: PetEntity,
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;
  adotaPet(
    idPet: number,
    idAdotante: number,
  ): Promise<{ success: boolean; message?: string }> | void;

  buscaPetPeloPorte(porte: EnumPorte): Promise<PetEntity[]> | PetEntity[];
}
