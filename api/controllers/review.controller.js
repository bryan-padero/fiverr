import Review from "../models/review.model.js"
import Gig from "../models/gig.model.js"
import createError from "../utils/createError.js"

export const createReview =  async (req, res, next) => {
    
    if(req.isSeller) return next(createError(403, "Sellers can't create a review!"))

        const newReview = new Review({
            userId: req.userId,
            gigId: req.body.gigId,
            desc: req.body.desc,
            star: req.body.star
        })

    try {
        const review = await Review.findOne({gigId: req.body.gigId, userId: req.userId})
        if(review) return next(createError(403, "You already created a review!"))

        const savedReview = await newReview.save()
         
        res.status(200).send(savedReview)
        await Gig.findByIdAndUpdate(req.body.gigId, {$inc: {totalStars: req.body.star, starNumber: 1}})
    } catch(err) {
        next(createError(404, "Review not found"))
    }
}

export const getReviews =  async (req, res, next) => {
    try {
     const reviews = await Review.find({gigId: req.params.gigId})
     console.log(reviews);
     res.status(200).send(reviews)  
    } catch(err) {
        next(createError(404, "Review not found"))
    }
}

export const deleteReview =  async (req, res, next) => {
    try {
        
    } catch(err) {
        next(createError(404, "Review not found"))
    }
}

