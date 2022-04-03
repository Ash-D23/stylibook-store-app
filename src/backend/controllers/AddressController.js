import { formatDate, requiresAuth } from "../utils/authUtils";
import { Response } from "miragejs";
import { v4 as uuid } from "uuid";

export const getAddressHandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const Address = schema.users.findBy({ _id: userId }).address;
    return new Response(200, {}, { Address });
  };
  
  export const addAddressHandler = function (schema, request) {
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
      const Address = schema.users.findBy({ _id: userId }).address;
      const { address } = JSON.parse(request.requestBody);
      Address.push({
        ...address,
        _id: uuid(),
        createdAt: formatDate(),
        updatedAt: formatDate(),
      });
      this.db.users.update({ _id: userId }, { address: Address });
      return new Response(201, {}, { address: Address });
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
  
  export const removeAddressHandler = function (schema, request) {
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
      let Address = schema.users.findBy({ _id: userId }).address;
      const addressId = request.params.addressId;
      Address = Address.filter((item) => item._id !== addressId);
      this.db.users.update({ _id: userId }, { address: Address });
      return new Response(200, {}, { address: Address });
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
  
  export const updateAddressHandler = function (schema, request) {
    const addressId = request.params.addressId;
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
      let Address = schema.users.findBy({ _id: userId }).address;
      const { updatedAddress } = JSON.parse(request.requestBody);
      Address = Address.map((item) => item._id === updatedAddress._id ? updatedAddress : item)
      this.db.users.update({ _id: userId }, { address: Address });
      return new Response(200, {}, { address: Address });
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
  