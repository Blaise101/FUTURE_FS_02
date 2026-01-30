import express from 'express'
import { getLeads, getLeadById, createLead, updateLeadStatus, deleteLead } from "../controllers/leadController.js"

const router = express.Router({ mergeParams: true })

router.get("/", getLeads);
router.get("/:id", getLeadById);
router.post("/", createLead);
router.patch("/:id/status", updateLeadStatus);
router.delete("/:id", deleteLead);


export default router;