// imports
import express from 'express'

// controllers 

import { 
    createGig, 
    deleteGig, 
    getGig, 
    getGigs } from '../controllers/gig.controller.js'

// middlewares
import { verifyToken } from '../middlewares/jwt.js'

// controller imports

const router = express.Router()

router.post("/", verifyToken, createGig)
router.delete("/:id", verifyToken, deleteGig)
router.get("/single/:id", verifyToken, getGig)
router.get("/", verifyToken, getGigs)

export default router