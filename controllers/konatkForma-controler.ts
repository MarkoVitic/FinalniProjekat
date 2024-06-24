import kontakFormaServices from "../services/kontakForma-services";
import { Request, Response } from "express";

const getAllUserQuestion = async (req: Request, res: Response) => {
  const data = await kontakFormaServices.getAllUserQuestion();
  res.send(data);
};

const deleteUserQuestion = async (req: Request, res: Response) => {
  const data = await kontakFormaServices.deleteUserQuestion(req.body);
  res.send(data);
};

const createUserQuestion = async (req: Request, res: Response) => {
  console.log(req.body);
  const data = await kontakFormaServices.createUserQuestion(req.body);
  res.send(data);
};

export default { getAllUserQuestion, deleteUserQuestion, createUserQuestion };
