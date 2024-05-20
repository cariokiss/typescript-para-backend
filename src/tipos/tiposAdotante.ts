import AdotanteEntity from '../entities/AdotanteEntity';

type TipoRequestBodyAdotante = Omit<AdotanteEntity, 'id' | 'pets'>; //Omit = omite informações

type TipoRequestParamsAdotante = { id?: string };

type TipoResponseBodyAdotante = {
  data?:
    | Pick<AdotanteEntity, 'id' | 'nome' | 'celular'>
    | Pick<AdotanteEntity, 'id' | 'nome' | 'celular'>[]; //Pick = seleciona os campos a serem retornados
  error?: unknown;
};

export {
  TipoRequestBodyAdotante,
  TipoResponseBodyAdotante,
  TipoRequestParamsAdotante,
};
