import { dbConnection } from "../common/db-conection";

const getAllUserQuestion = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM kontakt_forma");
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

const deleteUserQuestion = async (id: any) => {
  try {
    const data = await dbConnection.query(
      `DELETE FROM kontakt_forma WHERE kontakt_id=?`,
      [id.id]
    );
    return data;
  } catch (err) {
    return { success: false, msg: err };
  }
};

const createUserQuestion = async (question: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO kontakt_forma(ime,email,telefon,poruka,created) VALUES(?,?,?,?,CURRENT_TIMESTAMP)`,
      [question.ime, question.email, question.telefon, question.poruka]
    );
  } catch (err) {
    return { succes: false, msg: err };
  }
};

export default { getAllUserQuestion, deleteUserQuestion, createUserQuestion };
