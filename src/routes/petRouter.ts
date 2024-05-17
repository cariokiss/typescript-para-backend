import express from "express"; //importa o express para lidar com as rotas
import PetController from "../controller/PetController";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet);
router.get("/", petController.listaPets);
router.put("/:id", petController.atualizaPet);
router.delete("/:id", petController.deletaPet);

export default router; //exporta esse arquivo para que possamos utilizar no index.ts