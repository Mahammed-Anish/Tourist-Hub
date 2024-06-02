const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../models/review");
const Listing = require("../models/listing");
const { validateReview } = require("../middleware");

// POST ROUTE
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    // console.log("hi");
    let listing = await Listing.findById(req.params.id);
    let newReview = await Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved");
    req.flash("success", "Review Created");
    res.redirect(`/listings/${listing._id}`);
  })
);

// DELETE REVIEW ROUTE
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
