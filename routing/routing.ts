import objektiKontroler from "../controllers/objektiKontroler";
import express from "express";
import authMiddelware from "../common/auth-middleware";

const objektiZaRentiranje = express.Router();

objektiZaRentiranje.route("/objekti").get(objektiKontroler.getAllObjekti);
objektiZaRentiranje
  .route("/objekti/:id")
  .get(objektiKontroler.getSingleObjekat)
  .delete(authMiddelware, objektiKontroler.deleteObjekat)
  .put(authMiddelware, objektiKontroler.updateObjekat);
objektiZaRentiranje
  .route("/objekti")
  .post(authMiddelware, objektiKontroler.createObjekat);

export default objektiZaRentiranje;
