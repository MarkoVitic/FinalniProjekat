import { dbConnection } from "../common/db-conection";

const getAllApartmane = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM apartman WHERE apartman_id = ? ",
      [id]
    );
    return data;
  } catch (err) {
    return { succes: false, msg: err };
  }
};

const getSingleApartman = async (id: number, naziv: string) => {
  const data = await dbConnection.query(
    "SELECT * FROM apartman WHERE apartman_id = ? AND naziv_apartmana =? ",
    [id, naziv]
  );
  return data;
};

const updateApartman = async (id: number, naziv: string, apartman: any) => {
  const data = await dbConnection.query(
    `UPDATE apartman SET naziv_apartmana =?, opis_apartmanA =?, sprat_apartmana=?, cijena_po_danu=?, max_broj_osoba =?, updated = CURRENT_TIMESTAMP   WHERE apartman_id=? AND naziv_apartmana = ?`,
    [
      apartman.naziv,
      apartman.opis,
      apartman.sprat,
      apartman.cijena,
      apartman.maxOsoba,
      id,
      naziv,
    ]
  );
  return data;
};

const deleteApartman = async (id: number, naziv: string) => {
  const data = await dbConnection.query(
    `DELETE FROM apartman
  WHERE apartman_id = ?
  AND naziv_apartmana = ?`,
    [id, naziv]
  );
  return data;
};

const createApartman = async (id: number, apartman: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO apartman(apartman_id,naziv_apartmana, opis_apartmanA , sprat_apartmana, cijena_po_danu, max_broj_osoba ,created, updated 
    ) VALUES(?,?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,
      [
        id,
        apartman.naziv,
        apartman.opis,
        apartman.sprat,
        apartman.cijena,
        apartman.maxOsoba,
      ]
    );

    return data;
  } catch (err) {
    return { succes: false, msg: err };
  }
};

export default {
  getAllApartmane,
  getSingleApartman,
  deleteApartman,
  updateApartman,
  createApartman,
};
