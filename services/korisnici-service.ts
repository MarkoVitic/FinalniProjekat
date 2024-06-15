import { DataSource } from "typeorm";
import { update } from "lodash";
import korisniciRepositori from "../repositori/korisnici-repositori";

const getAllKorisnici = async () => {
  const data = await korisniciRepositori.getAllKprisnici();
  const korisnici: any = [];

  data.forEach((korisnik: any) => {
    korisnici.push({
      idKorisnika: korisnik.user_id,
      imeKorisnika: korisnik.name,
      prezimeKorisnika: korisnik.last_name,
      drzava: korisnik.drzava,
      grad: korisnik.grad,
      telefon: korisnik.telefon,
      email: korisnik.email,
      rezervacija: [korisnik.rezervacija],
      password: korisnik.password,
      role: korisnik.role,
      kreirano: korisnik.created,
      updejtovano: korisnik.updated,
    });
  });
  return korisnici;
};

const createKorisnik = async (korisnik: any) => {
  const data = await korisniciRepositori.createKorisnik(korisnik);
  console.log(data);
  return data;
};

export default { getAllKorisnici, createKorisnik };
