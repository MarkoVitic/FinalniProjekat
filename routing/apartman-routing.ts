import express from "express";
import apartmnControler from "../controllers/apartmn-controler";
import authMiddelware from "../common/auth-middleware";

const apartmaniObjekta = express.Router();

apartmaniObjekta
  .route("/objekti/:id/apartman")
  .get(apartmnControler.getAllApartmane)
  .post(authMiddelware, apartmnControler.createApartman);
apartmaniObjekta
  .route("/objekti/:id/:apartmanId")
  .get(apartmnControler.getSingleApartman)
  .delete(authMiddelware, apartmnControler.deleteApartman)
  .put(authMiddelware, apartmnControler.updateApartman);

export default apartmaniObjekta;
