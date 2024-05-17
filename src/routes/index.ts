import express from "express"; // importa o express para lidar com as rotas
import petRouter from "../routes/petRouter"

const router=(app: express.Router) => {
    app.use("/pets", petRouter);
};

export default router;