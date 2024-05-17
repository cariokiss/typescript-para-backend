import EnumEspecie from "../enem/EnumEspecie";

type TipoPet={ // define os campos a serem preenchidos para criar um pet
    id: number;
    nome: string;
    especie: EnumEspecie;
    adotado: boolean;
    idade: number;
}

export default TipoPet; // exporta o TipoPet para que possamos importar no PetController
