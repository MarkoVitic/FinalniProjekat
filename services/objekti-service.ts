import { DataSource } from "typeorm";
import objektiRepositori from "../repositori/objektiRepositori";

const getAllObjekti = async () => {
  const data = await objektiRepositori.getAllObjekte();
  const result: any = [];

  data.forEach((apartman: any) => {
    result.push({
      id: apartman.apartman_id,
      nazivApartmana: apartman.naziv_apartmana,
      drzava: apartman.drzava_objekta,
      grad: apartman.grad_objekta,
      ulica: apartman.ulica_objekta,
      email: apartman.email_objekta,
      telefon: apartman.telefon_objekta,
      opis: apartman.opis_objekta,
    });
  });
  return result;
};

const getSingleObjekat = async (id: number) => {
  const data = await objektiRepositori.getSingleObjekat(id);
  console.log(data);
  if (data) {
    return {
      id: data[0].apartman_id,
      nazivApartmana: data[0].naziv_apartmana,
      drzava: data[0].drzava_objekta,
      grad: data[0].grad_objekta,
      ulica: data[0].ulica_objekta,
      email: data[0].email_objekta,
      telefon: data[0].telefon_objekta,
      opis: data[0].opis_objekta,
    };
  }
  return null;
};

const createObjekat = async (objekat: any) => {
  const data = await objektiRepositori.createObjekat(objekat);
  return data;
};

const deleteObjekat = async (id: number) => {
  const data = await objektiRepositori.deleteObjekat(id);
  return data;
};

const updateObjekat = async (id: number, objekat: any) => {
  const data = await objektiRepositori.updateObjekat(id, objekat);
  return data;
};

export default {
  getAllObjekti,
  getSingleObjekat,
  createObjekat,
  deleteObjekat,
  updateObjekat,
};
