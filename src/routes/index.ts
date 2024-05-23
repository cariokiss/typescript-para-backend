import express from 'express'; //importa o express para lidar com as rotas
import petRouter from '../routes/petRouter';
import adotanteRouter from '../routes/adotanteRouter';
import abrigoRouter from './abrigoRouter';

const router = (app: express.Router) => {
  app.use('/pets', petRouter);
  app.use('/adotantes', adotanteRouter);
  app.use('/abrigos', abrigoRouter);
};

export default router;
