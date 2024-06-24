import express from "express";

import authMiddelware from "../common/auth-middleware";
import konatkFormaControler from "../controllers/konatkForma-controler";

const kontaktForma = express.Router();
kontaktForma
  .route("/kontakt")
  .get(konatkFormaControler.getAllUserQuestion)
  .delete(konatkFormaControler.deleteUserQuestion)
  .post(konatkFormaControler.createUserQuestion);

export default kontaktForma;
