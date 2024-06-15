import lodash from "lodash";
import express from "express";
import objektiZaRentiranje from "./routing/routing";
import apartmaniObjekta from "./routing/apartman-routing";
import { dbConnection } from "./common/db-conection";
import galerijaApartmana from "./routing/galerija-routing";
import korisnici from "./routing/korisnici-routing";
import rezervacijeRouting from "./routing/rezervacija-routing";

const app = express();

app.use(express.json());
app.use("/api/v1", objektiZaRentiranje);
app.use("/api/v1", apartmaniObjekta);
app.use("/api/v1", galerijaApartmana);
app.use("/api/v1", korisnici);
app.use("/api/v1", rezervacijeRouting);

// app.use("/");

dbConnection
  .initialize()
  .then(() => console.log("Data Source has been initialized!"))
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

// Startovanje Servera

const port = 7000;

app.listen(port, () => {
  console.log(`Server je podigunt na portu:${port}`);
});
