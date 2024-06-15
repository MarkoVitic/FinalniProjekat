import rezervacijaRepositori from "../repositori/rezervacija-repositori";

const getAllRezervacije = async () => {
  const data = await rezervacijaRepositori.getAllRezervacije();
  const result: any = [];

  data.forEach((rezervacija: any) => {
    result.push({
      brojRezervacije: rezervacija.rezervacija_id,
      userId: rezervacija.user_id,
      hotelId: rezervacija.hotel_id,
      roomId: rezervacija.room_id,
      datumDolaska: rezervacija.start_date,
      datumOdlaska: rezervacija.end_date,
      ukupanBrojDana: rezervacija.broj_dana,
      ukupnaCijena: rezervacija.ukupna_cijena,
      avans: rezervacija.avans,
      napomena: rezervacija.napomena,
      datumRezervacije: rezervacija.created,
    });
  });

  return result;
};

const checkDateAvailable = async (rezervacija: any) => {
  const data = await rezervacijaRepositori.checkDateAvailable(rezervacija);
  return data;
};

const createRezervaciju = async (userId: number, rezervacija: any) => {
  const isAvilable = await checkDateAvailable(rezervacija);
  console.log(isAvilable.length);

  if (isAvilable.length == 0) {
    const data = await rezervacijaRepositori.createRezervaciju(
      userId,
      rezervacija
    );
    return data;
  }
};

export default { getAllRezervacije, createRezervaciju, checkDateAvailable };
