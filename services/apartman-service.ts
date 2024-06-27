import apartmanRepositori from "../repositori/apartman-repositori";

const getAllApartmane = async (id: number) => {
  const data = await apartmanRepositori.getAllApartmane(id);
  return data;
};

const getSingleApartman = async (id: number, naziv: string) => {
  const data = await apartmanRepositori.getSingleApartman(id, naziv);

  return data;

  // if (data) {
  //   naziv: data[0].naziv_apartmana;
  //   opis: data[0].opis_apartmanA;
  //   sprat: data[0].sprat_apartmana;
  //   cijena: data[0].cijena_po_danu;
  // }
};

const deleteApartman = async (id: number, naziv: string) => {
  const data = await apartmanRepositori.deleteApartman(id, naziv);
  return data;
};

const updateApartman = async (id: number, naziv: string, apartman: any) => {
  const data = await apartmanRepositori.updateApartman(id, naziv, apartman);
  return data;
};

const createApartman = async (id: number, apartman: any) => {
  const data = await apartmanRepositori.createApartman(id, apartman);
  return data;
};

export default {
  getAllApartmane,
  getSingleApartman,
  deleteApartman,
  updateApartman,
  createApartman,
};
