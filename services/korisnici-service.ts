import korisniciRepositori from "../repositori/korisnici-repositori";
import cryto from "crypto";
import jwt from "jsonwebtoken";

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
  korisnik.password = cryto
    .createHash("md5")
    .update(korisnik.password)
    .digest("hex");
  const data: any = await korisniciRepositori.createKorisnik(korisnik);

  if (data.affectedRows > 0) {
    const token = jwt.sign(
      {
        email: korisnik.email,
        role: "user",
      },
      "NEKINASkljuc"
    );
    return { succes: true, token };
  } else {
    return { sucess: false, data };
  }
};

const loginKorisnik = async (korisnik: any) => {
  korisnik.password = cryto
    .createHash("md5")
    .update(korisnik.password)
    .digest("hex");
  const data = await korisniciRepositori.loginKorisnik(korisnik);

  if (data && data.length > 0) {
    const token = jwt.sign(
      {
        email: korisnik.email,
        role: data[0].role == "admin" ? true : false,
      },
      "NEKINASkljuc"
    );

    return { succes: true, token };
  } else {
    return {
      succes: false,
      msg: "There is no user with taht email or password",
    };
  }
};

export default { getAllKorisnici, createKorisnik, loginKorisnik };
