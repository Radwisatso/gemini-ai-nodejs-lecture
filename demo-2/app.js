// Saya mau membuat aplikasi Express sederhana yang menampilkan pesan "Hello, World!" di halaman utama.
const express = require("express");
const app = express();
const port = 3000;
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: "isi sendiri",
});

app.get("/popular-netflix-movies", async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Show me 20 popular Netflix movies in 2024. Provide the list in JSON format ONLY without any additional explanation. Each movie should have title, genre, and release year.",
    });

    const clearResponse = response.text.replace("```json", "")
    console.log(JSON.parse(clearResponse));
    res.send(JSON.parse(clearResponse));
  } catch (error) {
    console.log(error);

    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
