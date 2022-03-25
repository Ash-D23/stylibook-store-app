import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

  export const userUpdateHandler = function (schema, request) {
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
      const { updatedUser } = JSON.parse(request.requestBody);
      this.db.users.update({ _id: userId }, { 
        userName: updatedUser.userName,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        phone: updatedUser.phone,
        gender: updatedUser.gender
        });
      return new Response(201, {}, { });
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