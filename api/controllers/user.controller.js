// imports

// model imports
import User from '../models/user.model.js'
import createError from '../utils/createError.js'

export const deleteUser = async (req, res, next) => {

    const user = await User.findById(req.params.id)
    if(!user) return next(createError(404, "User does not exist!"))

    if (req.userId !== user._id.toString()) {
        return next(createError(403, "You can delete only your account!"))
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("Account has been deleted!")

}

export const getUser = async (req, res) => {

    const user = await User.findById(req.params.id)
    if(!user) return next(createError(404, "User does not exist!"))

    res.status(200).send(user)

}

