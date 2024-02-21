import express from "express";
import { createReferral, getReferral, getReferralList, removeReferral, updateReferral } from "../controllers/referral";

const router = express.Router();

router.get("/", getReferralList);
router.post("/", createReferral);
router.put("/:id", updateReferral);
router.get("/:id", getReferral);
router.delete("/:id", removeReferral);

export default router;
