// imports
import express from 'express'

// middlewares
import { verifyToken } from '../middlewares/jwt.js'

// controller imports
import { 
    getConversations, 
    createConversation, 
    getSingleConversation,
     updateConversation 
    } from '../controllers/conversation.controller.js'

const router = express.Router()

router.get("/", verifyToken, getConversations)
router.post("/", verifyToken, createConversation)
router.get("/single/:id", verifyToken, getSingleConversation)
router.put("/:id", verifyToken, updateConversation)

export default router