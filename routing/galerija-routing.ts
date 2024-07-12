import express from "express";
import galerijaControler from "../controllers/galerija-controler";
import authMiddelware from "../common/auth-middleware";

const galerijaApartmana = express.Router();

galerijaApartmana
  .route("/galerija/:id/:nazivId")
  .get(galerijaControler.getAllSlike)
  .post(authMiddelware, galerijaControler.createSlike)
  .delete(authMiddelware, galerijaControler.deleteSlike);

export default galerijaApartmana;
