import { SECRET } from "../config.js";
import jwt from "jsonwebtoken";
/**
 * Create a token for the user
 * @param {Object} payload
 */
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
