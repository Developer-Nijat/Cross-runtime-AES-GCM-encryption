import {
  encodeText,
  decodeText,
  base64ToBytes,
  bytesToBase64,
} from "./utils.js";

export async function importKeyFromBase64(base64Key) {
  const raw = base64ToBytes(base64Key);
  return await crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, [
    "encrypt",
    "decrypt",
  ]);
}

export async function encryptText(key, plaintext) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = encodeText(plaintext);
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded
  );

  return {
    iv: bytesToBase64(iv),
    data: bytesToBase64(encrypted),
  };
}

export async function decryptText(key, { iv, data }) {
  const ivBytes = base64ToBytes(iv);
  const encryptedBytes = base64ToBytes(data);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivBytes },
    key,
    encryptedBytes
  );

  return decodeText(decrypted);
}
