import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EnderecoEntity from './Endereco';
import PetEntity from './PetEntity';

@Entity()
export default class AdotanteEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  senha: string;
  @Column()
  celular: string;
  @Column({ nullable: true })
  foto?: string;

  @OneToOne(() => EnderecoEntity, {
    nullable: true,
    cascade: true, //o que acontecer com o adotante também acontecerá com o endereço
    eager: true, //eager = lista adotante e endereço juntos
  })
  @JoinColumn() //usado no relacionamento oneToOne para indicar um campo estrangeiro
  endereco?: EnderecoEntity;

  constructor(
    // primeiro os parâmetros obrigatórios depois os opcionais
    nome: string,
    senha: string,
    celular: string,
    foto?: string,
    endereco?: EnderecoEntity,
  ) {
    this.nome = nome;
    this.senha = senha;
    this.foto = foto;
    this.celular = celular;
    this.endereco = endereco;
  }
}
