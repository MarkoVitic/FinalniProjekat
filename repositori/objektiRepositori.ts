// Konekcija za bazu
import { dbConnection } from "../common/db-conection";

const getAllObjekte = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM naziv_objekta");
    return data;
  } catch (err) {
    return { succes: false, msg: err };
  }
};

const getSingleObjekat = async (id: number) => {
  try {
    const data = await dbConnection.query(
      `SELECT * FROM naziv_objekta WHERE apartman_id=${id}`
    );
    return data;
  } catch (err) {
    return { succes: false, msg: err };
  }
};

const createObjekat = async (objekat: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO naziv_objekta(naziv_apartmana,drzava_objekta,grad_objekta,ulica_objekta,email_objekta,telefon_objekta,opis_objekta) VALUES(?,?,?,?,?,?,?)`,
      [
        objekat.nazivApartmana,
        objekat.drzava,
        objekat.grad,
        objekat.ulica,
        objekat.email,
        objekat.telefon,
        objekat.opis,
      ]
    );
  } catch (err) {
    return { succes: false, msg: err };
  }
};

const deleteObjekat = async (id: number) => {
  console.log(id, "repositori");
  const data = await dbConnection.query(
    `DELETE FROM naziv_objekta WHERE apartman_id = ?`,
    [id]
  );
};

const updateObjekat = async (id: number, objekat: any) => {
  const data = await dbConnection.query(
    "UPDATE naziv_objekta SET naziv_apartmana =?, drzava_objekta=?, grad_objekta=?, ulica_objekta=?, email_objekta=?, telefon_objekta=?, opis_objekta=? WHERE apartman_id=?",
    [
      objekat.nazivApartmana,
      objekat.drzava,
      objekat.grad,
      objekat.ulica,
      objekat.email,
      objekat.telefon,
      objekat.opis,
      id,
    ]
  );
};

export default {
  getAllObjekte,
  getSingleObjekat,
  createObjekat,
  deleteObjekat,
  updateObjekat,
};
