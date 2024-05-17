import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = { //define os campos a serem preenchidos para criar um pet
    id: number;
    nome: string;
    especie: EnumEspecie;
    adotado: boolean;
    dataDeNascimento: Date;
}

export default TipoPet; //exporta o TipoPet para que possamos importar no PetController
