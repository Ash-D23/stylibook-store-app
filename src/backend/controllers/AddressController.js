import { formatDate, requiresAuth } from "../utils/authUtils";
import { Response } from "miragejs";

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
  
  /**
   * This handler handles adding items to user's cart.
   * send POST Request at /api/user/cart
   * body contains {product}
   * */
  
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
  
  /**
   * This handler handles removing items to user's cart.
   * send DELETE Request at /api/user/cart/:productId
   * */
  
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
  
  /**
   * This handler handles adding items to user's cart.
   * send POST Request at /api/user/cart/:productId
   * body contains {action} (whose 'type' can be increment or decrement)
   * */
  
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
      const Address = schema.users.findBy({ _id: userId }).address;
      const { updatedaddress } = JSON.parse(request.requestBody);

      Address = Address.map((item) => item.id === updatedaddress.id ? updatedaddress : item)
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
  