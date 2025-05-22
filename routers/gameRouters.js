import e from "express";
import { getAllGames, cadasterGame } from "../controllers/gameControllers.js";

const router = e.Router();

router.get("/", getAllGames);
router.post("/cadaster", cadasterGame)

export default router;
