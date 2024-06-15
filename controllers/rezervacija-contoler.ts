import { DataSource } from "typeorm";
import rezervacijaService from "../services/rezervacija-service";

import { Request, Response } from "express";

const getAllRezervacije = async (req: Request, res: Response) => {
  const data = await rezervacijaService.getAllRezervacije();

  res.send(data);
};

const createRezervaciju = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const data = await rezervacijaService.createRezervaciju(
    parseInt(userId),
    req.body
  );
  res.send(data);
};

// const checkDateAvailable = async (req: Request, res: Response) => {
//   const data = await rezervacijaService.checkDateAvailable(req.body);
//   res.send(data);
// };

export default { getAllRezervacije, createRezervaciju };
