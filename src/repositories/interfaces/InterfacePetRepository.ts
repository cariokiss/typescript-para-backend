import PetEntity from "../../entity/PetEntity";

export default interface InterfacePetRepository {
    criaPet(pet: PetEntity): void;
    listaPet(): Array<PetEntity> | Promise<PetEntity[]>; // o pipe | é um simbolo de união
    atualizaPet(id: number, pet: PetEntity): void;
    deletaPet(id: number, pet: PetEntity): void;
}