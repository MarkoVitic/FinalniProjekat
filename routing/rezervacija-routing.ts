import express from "express";
import rezervacijaContoler from "../controllers/rezervacija-contoler";
import authMiddelware from "../common/auth-middleware";

const rezervacijeRouting = express.Router();

rezervacijeRouting
  .route("/rezervacije")
  .get(rezervacijaContoler.getAllRezervacije);

rezervacijeRouting
  .route("/rezervacije/:userId")
  .post(authMiddelware, rezervacijaContoler.createRezervaciju);

rezervacijeRouting
  .route("/rezervacije/:userId/:rezervacijaId")
  .delete(authMiddelware, rezervacijaContoler.deleteRezervacija);

export default rezervacijeRouting;
