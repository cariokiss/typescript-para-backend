import { Repository } from "typeorm";
import PetEntity from "../entity/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>;

    constructor(repository: Repository<PetEntity>) {
        this.repository = repository
    }


    criaPet(pet: PetEntity): void {
        this.repository.save(pet);
    }
    async listaPet(): Promise<PetEntity[]> { //sempre que a requisição demorar um tempo para retornar precisa de um async/await
        return await this.repository.find();
    }
    atualizaPet(id: number, pet: PetEntity): void {
        throw new Error("Method not implemented.");
    }
    deletaPet(id: number, pet: PetEntity): void {
        throw new Error("Method not implemented.");
    }

}