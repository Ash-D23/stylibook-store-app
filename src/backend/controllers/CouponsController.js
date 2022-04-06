import { Response } from "miragejs";

export const getAllCouponsHandler = function () {
    try {
      return new Response(200, {}, { coupons: this.db.coupons });
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