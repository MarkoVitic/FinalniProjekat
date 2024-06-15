import { dbConnection } from "../common/db-conection";

const getAllSlike = async (hotelId: number, naziv: string) => {
  try {
    const data = await dbConnection.query(
      `SELECT * FROM galerija WHERE naziv_apartmana = ? AND hotel_id=?`,
      [naziv, hotelId]
    );
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

const createSlike = async (hotelId: number, naziv: string, slike: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO galerija(hotel_id,naziv_apartmana,slike_name) VALUES(?,?,?)`,
      [hotelId, naziv, slike.naziv]
    );
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

const deleteSlike = async (hotelId: number, naziv: string, slike: any) => {
  try {
    const data = await dbConnection.query(
      `DELETE FROM galerija
    WHERE hotel_id =? AND  naziv_apartmana = ?
    AND slike_name = ?`,
      [hotelId, naziv, slike.naziv]
    );
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

export default { getAllSlike, createSlike, deleteSlike };
