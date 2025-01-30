import express from "express";
import { updateResort, createResort, getResorts, deleteResort } from "../controllers/resort.controller.js";

const router = express.Router();

router.get("/", getResorts);
router.post("/", createResort);
router.put("/:id", updateResort);
router.delete("/:id", deleteResort);

export default router;


