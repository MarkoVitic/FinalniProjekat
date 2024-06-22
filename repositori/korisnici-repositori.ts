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
  try {
    const data = await dbConnection.query(
      `INSERT INTO users(name,last_name,drzava,grad,telefon, email,password,role ) VALUES
      (?,?,?,?,?,?,?,0)`,
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
  } catch (err: any) {
    return { succes: false, msg: err };
  }
};

export default { getAllKprisnici, createKorisnik };
