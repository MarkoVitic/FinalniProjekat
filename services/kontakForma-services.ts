import kontaktFormaRepositori from "../repositori/kontaktForma-repositori";

const getAllUserQuestion = async () => {
  const data = await kontaktFormaRepositori.getAllUserQuestion();
  const result: any = [];
  data.forEach((data: any) => {
    result.push({
      ime: data.ime,
      email: data.email,
      telefon: data.telefon,
      poruka: data.poruka,
      kreirano: data.created,
    });
  });
  return result;
};
const deleteUserQuestion = async (id: any) => {
  const data = await kontaktFormaRepositori.deleteUserQuestion(id);
  return data;
};

const createUserQuestion = async (question: any) => {
  const data = await kontaktFormaRepositori.createUserQuestion(question);
  return data;
};

export default { getAllUserQuestion, deleteUserQuestion, createUserQuestion };
