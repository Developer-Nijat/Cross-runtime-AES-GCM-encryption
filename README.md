🔐 Simple cross-runtime AES-GCM encryption library for Node.js, React, and Edge runtimes.

✅ Works with static base64 key stored in .env
✅ Uses Web Crypto API (no dependencies)

🛠️ Usage

Install:
```npm install secure-crypto-utils```

Example:

```
import {
importKeyFromBase64,
encryptText,
decryptText
} from 'secure-crypto-utils';

const key = await importKeyFromBase64(process.env.MY_KEY);
const encrypted = await encryptText(key, 'Hello World');
const plain = await decryptText(key, encrypted);

```
🌍 Works in:

Node.js (v15+)

React / Browser

Next.js (Edge runtime)