import express, { Request, Response } from "express";

import apartmaniService from "../services/objekti-service";

const getAllObjekti = async (req: Request, res: Response) => {
  const data = await apartmaniService.getAllObjekti();
  res.send(data);
};

const getSingleObjekat = async (req: Request, res: Response) => {
  const id = req.params.id;

  const data = await apartmaniService.getSingleObjekat(parseInt(id));

  res.send(data);
};

const createObjekat = async (req: Request, res: Response) => {
  const data = await apartmaniService.createObjekat(req.body);
  res.send(data);
};

const deleteObjekat = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await apartmaniService.deleteObjekat(parseInt(id));
  console.log(data, "kontroler");
  res.status(200).send(data);
};

const updateObjekat = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await apartmaniService.updateObjekat(parseInt(id), req.body);
  res.status(200).send(data);
};

export default {
  getAllObjekti,
  getSingleObjekat,
  createObjekat,
  deleteObjekat,
  updateObjekat,
};
