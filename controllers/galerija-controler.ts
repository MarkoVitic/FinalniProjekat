import express, { Request, Response } from "express";
import galerijaService from "../services/galerija-service";

const getAllSlike = async (req: Request, res: Response) => {
  const nazivApartmana = req.params.nazivId;
  const hotelId = req.params.id;

  const data = await galerijaService.getAllSlike(
    parseInt(hotelId),
    nazivApartmana
  );
  res.send(data);
};

const createSlike = async (req: Request, res: Response) => {
  const nazivApartmana = req.params.nazivId;
  const hotelId = req.params.id;
  const data = await galerijaService.createSlike(
    parseInt(hotelId),
    nazivApartmana,
    req.body
  );
  res.send(data);
};

const deleteSlike = async (req: Request, res: Response) => {
  const nazivApartmana = req.params.nazivId;
  const hotelId = req.params.id;

  const data = await galerijaService.deleteSlike(
    parseInt(hotelId),
    nazivApartmana,
    req.body
  );

  res.send(data);
};

export default { getAllSlike, createSlike, deleteSlike };
