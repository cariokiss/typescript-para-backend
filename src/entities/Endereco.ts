import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  cidade: string;
  @Column()
  estado: string;

  constructor(
    // primeiro os parâmetros obrigatórios depois os opcionais
    cidade: string,
    estado: string,
  ) {
    this.cidade = cidade;
    this.estado = estado;
  }
}
