// imports
import express from 'express'

// controller imports
import { 
    createGig, 
    deleteGig, 
    getGig, 
    getGigs } from '../controllers/gig.controller.js'

// middlewares
import { verifyToken } from '../middlewares/jwt.js'



const router = express.Router()

router.post("/", verifyToken, createGig)
router.delete("/:id", verifyToken, deleteGig)
router.get("/single/:id", getGig)
router.get("/", getGigs)

export default router