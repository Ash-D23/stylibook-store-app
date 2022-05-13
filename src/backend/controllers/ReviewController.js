import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getReviews = function () {
  return new Response(200, {}, { reviews: this.db.reviews });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

 export const getReviewbyProduct = function (schema, request) {
    const id = request.params.productId;
    try {
      const reviews = this.db.reviews.filter((item) => item.productId === id)
      return new Response(200, {}, { reviews });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

  export const addReviewHandler = function(schema, request){
    try{
      const review  = JSON.parse(request.requestBody);
      const createdReview = schema.reviews.create({...review, _id: uuid()});
      return new Response(200, {}, { review: createdReview });
    }catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  }

  export const handleDeleteReview = function (schema, request) {
    const id = request.params.id;
    const userId = requiresAuth.call(this, request);
    try {
      if (!userId) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      this.db.reviews.remove({ _id: id})
      return new Response(200, {}, { });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

  export const handleEditReview = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
      const review  = JSON.parse(request.requestBody);
      this.db.reviews.update({ _id: review._id}, review)
      return new Response(200, {}, { review });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

