import PetEntity from '../entities/PetEntity';

type TipoRequestBodyPet = Omit<PetEntity, 'id'>; //Omit = omite informações

type TipoRequestParamsPet = {
  id?: string;
  pet_id?: string;
  adotante_id?: string;
};

type TipoResponseBodyPet = {
  data?:
    | Pick<PetEntity, 'id' | 'nome' | 'porte' | 'especie'>
    | Pick<PetEntity, 'id' | 'nome' | 'porte' | 'especie'>[]; //Pick = seleciona os campos a serem retornados
  error?: unknown;
};

export { TipoRequestBodyPet, TipoResponseBodyPet, TipoRequestParamsPet };
