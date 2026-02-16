// Generate a template for express app
const express = require("express");
const app = express();
const port = 3000;

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: "isi sendiri",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents:
      req.body.prompt
    });

    res.send(response.text)
  } catch (error) {
    console.log(error);

    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
