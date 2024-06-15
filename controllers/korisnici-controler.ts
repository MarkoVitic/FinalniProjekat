import { Request, Response } from "express";
import korisniciService from "../services/korisnici-service";

const getAllKorisnici = async (req: Request, res: Response) => {
  const data = await korisniciService.getAllKorisnici();
  res.send(data);
};

const createKornisk = async (req: Request, res: Response) => {
  const data = await korisniciService.createKorisnik(req.body);
  res.send(data).json(data);
};

export default { getAllKorisnici, createKornisk };
