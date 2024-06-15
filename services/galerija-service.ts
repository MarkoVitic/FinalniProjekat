import { DataSource } from "typeorm";
import galerijaRepositori from "../repositori/galerija-repositori";

const getAllSlike = async (hotelId: number, naziv: string) => {
  const data = await galerijaRepositori.getAllSlike(hotelId, naziv);
  const result: any = [];
  data.forEach((slika: any) => {
    result.push({
      idHotela: slika.hotel_id,
      nazivApartmana: slika.naziv_apartmana,
      nazivSlike: slika.slike_name,
    });
  });
  return result;
};

const createSlike = async (hotelId: number, naziv: string, slike: any) => {
  const data = await galerijaRepositori.createSlike(hotelId, naziv, slike);
  return data;
};

const deleteSlike = async (hotelId: number, naziv: string, slike: any) => {
  const data = await galerijaRepositori.deleteSlike(hotelId, naziv, slike);
  return data;
};

export default { getAllSlike, createSlike, deleteSlike };
