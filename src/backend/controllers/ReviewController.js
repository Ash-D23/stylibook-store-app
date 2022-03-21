import { Response } from "miragejs";

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
      const reviews = schema.reviews.findBy({ productId: id });
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

