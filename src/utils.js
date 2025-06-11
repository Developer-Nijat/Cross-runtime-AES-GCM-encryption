export function encodeText(text) {
  return new TextEncoder().encode(text);
}

export function decodeText(buffer) {
  return new TextDecoder().decode(buffer);
}

export function base64ToBytes(base64) {
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
}

export function bytesToBase64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)));
}
