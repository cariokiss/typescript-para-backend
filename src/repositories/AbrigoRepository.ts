import { Repository } from 'typeorm';
import InterfaceAbrigoRepository from './interfaces/InterfaceAbrigoRepository';
import AbrigoEntity from '../entities/AbrigoEntity';
import { NaoEncontrado, RequisicaoRuim } from '../utils/manipulaErros';
import EnderecoEntity from '../entities/Endereco';

export default class AbrigoRepository implements InterfaceAbrigoRepository {
  constructor(private repository: Repository<AbrigoEntity>) {}

  private async existeAbrigoComCelular(celular: string): Promise<boolean> {
    return !!(await this.repository.findOne({ where: { celular } }));
  }

  async criaAbrigo(abrigo: AbrigoEntity): Promise<void> {
    if (await this.existeAbrigoComCelular(abrigo.celular)) {
      throw new RequisicaoRuim('Já existe um abrigo com esse celular!');
    }
    await this.repository.save(abrigo);
  }

  async listaAbrigos(): Promise<AbrigoEntity[]> {
    return await this.repository.find();
  }

  async atualizaAbrigo(id: number, newData: AbrigoEntity) {
    const abrigoToUpdate = await this.repository.findOne({ where: { id } });

    if (!abrigoToUpdate) {
      throw new NaoEncontrado('Abrigo não encontrado!');
    }
  }

  deletaAbrigo(id: number): void {
    throw new Error('Method not implemented.');
  }
  atualizaEnderecoAbrigo(idAbrigo: number, endereco: EnderecoEntity): void {
    throw new Error('Method not implemented.');
  }
}
