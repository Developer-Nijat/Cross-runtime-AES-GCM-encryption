# 🔐 @developer.nijat/crypto-utils

Cross-runtime AES-GCM encryption and decryption utility for JavaScript.

✅ Works in:

* ✅ Node.js (v15+ with Web Crypto)
* ✅ Browsers (React, Next.js, etc.)
* ✅ Edge runtimes (Cloudflare Workers, Vercel Edge Functions)

🔗 GitHub: [https://github.com/Developer-Nijat/Cross-runtime-AES-GCM-encryption](https://github.com/Developer-Nijat/Cross-runtime-AES-GCM-encryption)
📦 NPM: [https://www.npmjs.com/package/@developer.nijat/crypto-utils](https://www.npmjs.com/package/@developer.nijat/crypto-utils)

---

## 🚀 Features

* AES-256-GCM encryption with random IV
* Static key support for persistent encryption/decryption across restarts
* Tiny and dependency-free
* Same API works in browser, Node.js, and edge runtimes

---

## 📦 Installation

```bash
npm install @developer.nijat/crypto-utils
# or
yarn add @developer.nijat/crypto-utils
```

---

## 🔐 Usage

🔑 Import your secret key as base64 (recommended: 32 bytes = 256 bits):

.env:

```env
CRYPTO_KEY=YOUR_BASE64_ENCODED_KEY
```

📄 JavaScript:

```js
import {
  importKeyFromBase64,
  encryptText,
  decryptText
} from '@developer.nijat/crypto-utils';

const base64Key = process.env.CRYPTO_KEY;
const key = await importKeyFromBase64(base64Key);

// Encrypt
const encrypted = await encryptText(key, 'Hello World');
// { iv: '...', data: '...' }

// Decrypt
const decrypted = await decryptText(key, encrypted);
// 'Hello World'
```

---

## 🧪 Generate a 32-byte base64 key

```js
// Node.js only
const key = crypto.randomBytes(32).toString('base64');
console.log(key);
```

---

## ✨ API

### importKeyFromBase64(base64Key: string): CryptoKey

Converts a base64 string to a usable AES-GCM CryptoKey.

---

### encryptText(key: CryptoKey, plaintext: string): Promise<{ iv, data }>

Encrypts text using AES-GCM with a randomly generated IV. Returns base64-encoded output.

---

### decryptText(key: CryptoKey, { iv, data }): Promise<string>

Decrypts encrypted object using AES-GCM and returns original plaintext.

---

## 🧠 Notes

* AES-GCM is secure and performant
* IV is generated per-encryption (12 bytes)
* Output is suitable for database or JWT-style storage
* Compatible with Web Crypto API everywhere

---

## 📄 License

MIT © Nijat Aliyev
See: [LICENSE](./LICENSE%20(MIT))
