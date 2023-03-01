import CryptoJS from "crypto-js";
import crypto from "crypto";

//
//generate random key
function randomKey() {
  const length = 16;
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//
//for encrypting AES key using RSA
function encryptRSA(payload, publicKey) {
  const plaintext = JSON.stringify(payload);

  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
    },
    Buffer.from(plaintext)
  );

  const encPayload = encryptedData.toString("base64");
  return encPayload;
}

//
//for decrypting AES key using RSA
function decryptRSA(payload, privateKey) {
  const base64DecodedStr = payload.toString("base64");
  const encryptedString = Buffer.from(base64DecodedStr, "base64");

  const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      passphrase: "",
    },
    encryptedString
  );

  const jsonPayload = JSON.parse(decryptedData.toString());
  return jsonPayload;
}

//
//encrypt main payload using AES
function encryptAES_new(plaintext, key) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(plaintext),
    key
  ).toString();

  return ciphertext;
}

//
//decrypt main payload using AES
function decryptAES_new(cipherText, key) {
  const bytes = CryptoJS.AES.decrypt(cipherText, key);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
}

//
//login encryption function || keygen=>AES(payload)--RSA(KEY)=>return (e_payload,e_key) || for auth server
function encryptAuthMain(payload) {
  //random key generation =>length==16
  const keyForAES = randomKey();

  //payload encrypt
  const encryptedData = encryptAES_new(payload, keyForAES);

  //key encrypt using public key auth
  const publicKeyAuth = process.env.authServerPublicKey;
  const encryptedKey = encryptRSA(keyForAES, publicKeyAuth);

  return { payload: encryptedData, key: encryptedKey };
}

//
//for encrypting payload data  || keygen=>AES(payload)--RSA(KEY)=>return (e_payload,e_key) || for data server
function encryptPayloadMain(payload) {
  //random key generation =>length==16
  const keyForAES = randomKey();

  //payload encrypt
  const encryptedData = encryptAES_new(payload, keyForAES);

  //key encrypt
  const publicKeyPayload = process.env.payLoadPublicKey;
  const encryptedKey = encryptRSA(keyForAES, publicKeyPayload);

  return { payload: encryptedData, key: encryptedKey };
}

//
// total decryption function || RSA(e_KEY)=>AES(e_payload)=>return de_payload
function decryptMain(encryptedData, encryptedKey) {
  //decrypting key
  const privateKeyResponse = process.env.responsePrivateKey;
  const decryptedKey = decryptRSA(encryptedKey, privateKeyResponse);

  //decrypting payload
  const decryptedData = decryptAES_new(encryptedData, decryptedKey);
  return decryptedData;
}

export default {
  encryptAuthMain,
  encryptPayloadMain,
  decryptMain,
  encryptAES_new,
  decryptAES_new,
};
