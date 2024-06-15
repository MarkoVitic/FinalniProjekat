import { dbConnection } from "../common/db-conection";

const getAllKprisnici = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM users");
    return data;
  } catch (err) {
    return { succes: false, msg: err };
  }
};

const createKorisnik = async (korisnik: any) => {
  const data = await dbConnection.query(
    `INSERT INTO users(name,last_name,drzava,grad,telefon, email,password ) VALUES
    (?,?,?,?,?,?,?)`,
    [
      korisnik.imeKorisnika,
      korisnik.prezimeKorisnika,
      korisnik.drzava,
      korisnik.grad,
      korisnik.telefon,
      korisnik.email,
      korisnik.password,
    ]
  );
  return data;
};

export default { getAllKprisnici, createKorisnik };