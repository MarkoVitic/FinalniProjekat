import express from "express";
import galerijaControler from "../controllers/galerija-controler";

const galerijaApartmana = express.Router();

galerijaApartmana
  .route("/galerija/:id/:nazivId")
  .get(galerijaControler.getAllSlike)
  .post(galerijaControler.createSlike)
  .delete(galerijaControler.deleteSlike);

export default galerijaApartmana;
