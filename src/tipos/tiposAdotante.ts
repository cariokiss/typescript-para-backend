import AdotanteEntity from '../entities/AdotanteEntity';

type TipoRequestBodyAdotante = Omit<AdotanteEntity, 'id'>; //Omit = omite informações
type TipoResponseBodyAdotante = {
  data?: Pick<AdotanteEntity, 'id' | 'nome' | 'celular'>; //Pick = seleciona os campos a serem retornados
};

export { TipoRequestBodyAdotante, TipoResponseBodyAdotante };
