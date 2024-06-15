import { dbConnection } from "../common/db-conection";

const getAllRezervacije = async () => {
  try {
    const data = await dbConnection.query(`SELECT * FROM rezervacija`);
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

const createRezervaciju = async (userId: number, rezervacija: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO rezervacija (user_id,hotel_id,room_id,start_date,end_date,broj_dana,ukupna_cijena,napomena,created,updated) VALUES(?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,
      [
        userId,
        rezervacija.hotelId,
        rezervacija.roomId,
        rezervacija.datumDolaska,
        rezervacija.datumOdlaska,
        rezervacija.ukupanBrojDana,
        rezervacija.ukupnaCijena,
        rezervacija.napomena,
      ]
    );
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

const checkDateAvailable = async (rezervacija: any) => {
  try {
    const data = await dbConnection.query(
      `SELECT *
      FROM rezervacija
      WHERE hotel_id = ? AND room_id = ?  AND ((start_date < ? AND end_date > ?)
          OR (start_date >= ? AND start_date < ?)
          OR (end_date > ? AND end_date <= ?))`,
      [
        rezervacija.hotelId,
        rezervacija.roomId,
        rezervacija.datumDolaska,
        rezervacija.datumOdlaska,
        rezervacija.datumDolaska,
        rezervacija.datumOdlaska,
        rezervacija.datumDolaska,
        rezervacija.datumOdlaska,
      ]
    );

    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

export default { getAllRezervacije, createRezervaciju, checkDateAvailable };
