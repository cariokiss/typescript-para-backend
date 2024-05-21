import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EnderecoEntity from './Endereco';
import PetEntity from './PetEntity';
import { criaSenhaCriptografada } from '../util/senhaCriptografada';

@Entity() //com isso passamos a mapear tudo oq está aq para o banco de dados como uma tabela
export default class AbrigoEntity {
  @PrimaryGeneratedColumn() //faz com que o ID seja uma chave primária e seja gerado automaticamente
  id!: number;
  @Column() //faz com que sejam colunas simples no banco de dados
  nome: string;
  @Column({ unique: true })
  email: string;
  @Column()
  celular: string;
  @Column()
  senha: string;
  @OneToOne(() => EnderecoEntity, {
    nullable: true,
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  endereco?: EnderecoEntity;

  @OneToMany(() => PetEntity, (pet) => pet.abrigo)
  pets!: PetEntity[];

  constructor(
    nome: string,
    email: string,
    celular: string,
    senha: string,
    endereco?: EnderecoEntity,
  ) {
    this.nome = nome;
    this.email = email;
    this.celular = celular;
    this.senha = senha;
    this.endereco = endereco;
  }
  @BeforeInsert()
  @BeforeUpdate()
  private async criptografaSenha() {
    if (this.senha) {
      this.senha = criaSenhaCriptografada(this.senha);
    }
  }
}
