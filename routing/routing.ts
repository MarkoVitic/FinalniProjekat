import objektiKontroler from "../controllers/objektiKontroler";
import express from "express";

const objektiZaRentiranje = express.Router();

objektiZaRentiranje.route("/objekti").get(objektiKontroler.getAllObjekti);
objektiZaRentiranje
  .route("/objekti/:id")
  .get(objektiKontroler.getSingleObjekat)
  .delete(objektiKontroler.deleteObjekat)
  .put(objektiKontroler.updateObjekat);
objektiZaRentiranje.route("/objekti").post(objektiKontroler.createObjekat);

export default objektiZaRentiranje;
