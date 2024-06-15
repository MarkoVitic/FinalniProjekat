import { update } from "lodash";
import apartmanService from "../services/apartman-service";
import { Request, Response } from "express";

const getAllApartmane = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await apartmanService.getAllApartmane(parseInt(id));
  res.status(200).send(data);
};

const getSingleApartman = async (req: Request, res: Response) => {
  const id = req.params.id;
  const apartmanId = req.params.apartmanId;
  console.log(apartmanId);
  const data = await apartmanService.getSingleApartman(
    parseInt(id),
    apartmanId
  );
  res.send(data);
};

const updateApartman = async (req: Request, res: Response) => {
  const id = req.params.id;
  const apartmanId = req.params.apartmanId;
  const data = await apartmanService.updateApartman(
    parseInt(id),
    apartmanId,
    req.body
  );
  res.send(data);
};

const deleteApartman = async (req: Request, res: Response) => {
  const id = req.params.id;
  const apartmanId = req.params.apartmanId;
  const data = await apartmanService.deleteApartman(parseInt(id), apartmanId);
  res.send(data);
};

const createApartman = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await apartmanService.createApartman(parseInt(id), req.body);
  res.send(data);
};

export default {
  getAllApartmane,
  getSingleApartman,
  deleteApartman,
  updateApartman,
  createApartman,
};
