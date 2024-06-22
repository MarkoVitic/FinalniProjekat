import express from "express";
import korisniciControler from "../controllers/korisnici-controler";

const korisnici = express.Router();

korisnici
  .route("/korisnici")
  .get(korisniciControler.getAllKorisnici)
  .post(korisniciControler.createKornisk);
korisnici.route("/login").post(korisniciControler.loginKorisnik);

export default korisnici;
