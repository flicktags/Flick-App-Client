import { generateKeyAndIV, encryptData } from "./encryption";

async function saveEncryptedFeedback({ userId, name, feedback, noofStars }) {
  try {
    const { keyMaterial, iv } = generateKeyAndIV(userId);

    const encryptedPayload = {
      userId,
      name: await encryptData(name || "", keyMaterial, iv),
      feedback: await encryptData(feedback || "", keyMaterial, iv),
      noofStars: await encryptData(String(noofStars), keyMaterial, iv),
      iv: btoa(String.fromCharCode(...new Uint8Array(iv))),
    };

    const response = await fetch(`https://flickapp.vercel.app/user/submit-feedback/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encryptedPayload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit encrypted feedback");
    }

    return await response.json();
  } catch (err) {
    throw new Error("Encryption or submission failed: " + err.message);
  }
}

export { saveEncryptedFeedback };
