// encryption.js

// Function to generate a key from a password (userId + fixed string)
// const generateKey = async (userId) => {
//     const fixedString = "F@71c#K$"; // Strong fixed string
  
//     // Ensure the key is exactly 32 characters long
//     const keyMaterialString = (userId + fixedString).substring(0, 32); // Trim to 32 characters
//     console.log("Encryption Key (32 characters):", keyMaterialString);
  
//     const keyMaterial = new TextEncoder().encode(keyMaterialString);
  
//     const key = await crypto.subtle.importKey(
//       "raw",
//       keyMaterial,
//       { name: "PBKDF2" },
//       false,
//       ["deriveKey"]
//     );
  
//     const derivedKey = await crypto.subtle.deriveKey(
//       {
//         name: "PBKDF2",
//         salt: new TextEncoder().encode("somesalt"), // Optional salt
//         iterations: 100000, // Number of iterations
//         hash: "SHA-256", // Hash function
//       },
//       key,
//       { name: "AES-CBC", length: 256 }, // AES-256-CBC
//       true, // Extractable
//       ["encrypt", "decrypt"]
//     );
  
//     return derivedKey;
//   };
  
//   // Function to generate an IV from the userId
//   const generateIV = (userId) => {
//     const iv = new TextEncoder().encode(userId.padEnd(16, "0").substring(0, 16)); // Ensure 16 bytes
//     return iv;
//   };
  
//   // Function to encrypt data using AES-CBC
//   const encryptData = async (data, key, iv) => {
//     const encodedData = new TextEncoder().encode(data);
//     const encrypted = await crypto.subtle.encrypt(
//       { name: "AES-CBC", iv },
//       key,
//       encodedData
//     );
  
//     // Convert Uint8Array to base64 using btoa
//     const encryptedArray = new Uint8Array(encrypted);
//     let binaryString = "";
//     encryptedArray.forEach((byte) => {
//       binaryString += String.fromCharCode(byte);
//     });
//     return btoa(binaryString); // Return as base64 string
//   };
  
//   export { generateKey, generateIV, encryptData };
const crypto = window.crypto || window.msCrypto; // For compatibility

const generateKeyAndIV = (userId) => {
  const fixedString = "F@71c#K$"; // Strong fixed string
  const keyString = (userId + fixedString).padEnd(32, '0').substring(0, 32); // 32 characters
  const ivString = userId.padEnd(16, '0').substring(0, 16); // 16 characters

  const keyMaterial = new TextEncoder().encode(keyString);
  const iv = new TextEncoder().encode(ivString);

  return { keyMaterial, iv };
};

const encryptData = async (data, keyMaterial, iv) => {
  const key = await crypto.subtle.importKey(
    "raw",
    keyMaterial,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );

  const encodedData = new TextEncoder().encode(data);
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    encodedData
  );

  const encryptedArray = new Uint8Array(encrypted);
  let binaryString = "";
  encryptedArray.forEach((byte) => {
    binaryString += String.fromCharCode(byte);
  });

  const encryptedBase64 = btoa(binaryString)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return encryptedBase64;
};

export { generateKeyAndIV, encryptData };