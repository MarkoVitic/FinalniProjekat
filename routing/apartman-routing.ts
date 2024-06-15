import express from "express";
import apartmnControler from "../controllers/apartmn-controler";

const apartmaniObjekta = express.Router();

apartmaniObjekta
  .route("/objekti/:id/apartman")
  .get(apartmnControler.getAllApartmane)
  .post(apartmnControler.createApartman);
apartmaniObjekta
  .route("/objekti/:id/:apartmanId")
  .get(apartmnControler.getSingleApartman)
  .delete(apartmnControler.deleteApartman)
  .put(apartmnControler.updateApartman);

export default apartmaniObjekta;
