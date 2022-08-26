const crypto = require("crypto");

/**
 * It takes a string and a secret, and returns a hash of the string using the secret as a key
 * @param data - The data to be signed.
 * @param secret - The secret key used to generate the signature.
 */
exports.createSignature = (data, secret) =>
  crypto.createHmac("sha256", secret).update(data).digest("hex");

/* Checking if the signature is valid. */
exports.isValidSignature = (signature, data, secret) =>
  this.createSignature(data, secret) === signature ? true : false;
