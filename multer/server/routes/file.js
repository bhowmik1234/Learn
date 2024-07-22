import express from "express";
import {fileController} from "../controllers/fileController.js";
import { HandleFile } from "../middlewares/multerFile.js";

const router = express.Router();

router.post('/getfile', HandleFile, fileController);

export default router;