import express, { RequestHandler } from 'express';
import { AppDataSource } from '../config/dataSource';
import AbrigoController from '../controller/AbrigoController';
import AbrigoRepository from '../repositories/AbrigoRepository';

const router = express.Router();
const abrigoRepository = new AbrigoRepository(AppDataSource.getRepository('AbrigoEntity'));

const abrigoController = new AbrigoController(abrigoRepository);

router.post('/', (req, res) => abrigoController.criaAbrigo(req, res));

router.get('/', (req, res) => abrigoController.listaAbrigos(req, res));

router.put('/:id', (req, res) => abrigoController.atualizaAbrigo(req, res));

router.delete('/:id', (req, res) => abrigoController.deletaAbrigo(req, res));

export default router;
