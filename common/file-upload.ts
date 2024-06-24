import multer from "multer";
import express from "express";
import { Request, Response } from "express";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "..", "public"));
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}`);
  },
});

let fileUpload = multer({ storage });

const fileUploadRouter = express.Router();

fileUploadRouter.post(
  "/upload",
  fileUpload.single("img"),
  (request: Request, response: Response) => {
    console.log("request");
    if (!request.file) {
      response.send({
        status: 1,
        msg: "No file uploaded",
      });
    } else {
      response.send({
        status: 0,
        msg: "File uploaded!",
        filename: request.file.filename,
      });
    }
  }
);

export default fileUploadRouter;
