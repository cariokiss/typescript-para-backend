import AdotanteEntity from '../entities/AdotanteEntity';

type TipoRequestBodyAdotante = Omit<AdotanteEntity, 'id' | 'pets'>; //Omit = omite informações

type TipoRequestParamsAdotante = { id?: string };

type TipoResponseBodyAdotante = {
  dados?:
    | Pick<AdotanteEntity, 'id' | 'nome' | 'celular' | 'endereco'>
    | Pick<AdotanteEntity, 'id' | 'nome' | 'celular' | 'endereco'>[]; //Pick = seleciona os campos a serem retornados
};

export { TipoRequestBodyAdotante, TipoResponseBodyAdotante, TipoRequestParamsAdotante };
