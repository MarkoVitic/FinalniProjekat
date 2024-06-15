import express from "express";
import rezervacijaContoler from "../controllers/rezervacija-contoler";

const rezervacijeRouting = express.Router();

rezervacijeRouting
  .route("/rezervacije")
  .get(rezervacijaContoler.getAllRezervacije);

rezervacijeRouting
  .route("/rezervacije/:userId")
  .post(rezervacijaContoler.createRezervaciju);

export default rezervacijeRouting;
