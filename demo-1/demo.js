const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: "isi sendiri"
}); // Dont forget to add API Key

async function main() {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Jelaskan dong apa itu Hacktiv8"
        })
        console.log(response.text)
    } catch (error) {
        console.log(error)
    }
}

main()