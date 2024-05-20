import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import EnumEspecie from '../enum/EnumEspecie';
import AdotanteEntity from './AdotanteEntity';

@Entity() //com isso passamos a mapear tudo oq está aq para o banco de dados como uma tabela
export default class PetEntity {
  @PrimaryGeneratedColumn() //faz com que o ID seja uma chave primária e seja gerado automaticamente
  id!: number;
  @Column() //faz com que sejam colunas simples no banco de dados
  nome: string;
  @Column()
  especie: EnumEspecie;
  @Column()
  dataDeNascimento: Date;
  @Column()
  adotado: boolean;
  @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
  adotante!: AdotanteEntity;

  constructor(
    nome: string,
    especie: EnumEspecie,
    dataDeNascimento: Date,
    adotado: boolean,
  ) {
    this.nome = nome;
    this.especie = especie;
    this.dataDeNascimento = dataDeNascimento;
    this.adotado = adotado;
  }
}
