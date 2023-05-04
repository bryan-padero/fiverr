// imports
import express from 'express'

// controller imports
import { register,login, logout } from '../controllers/auth.controller.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router