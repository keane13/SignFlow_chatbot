import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY || process.env.API_KEY || '');

// Define Function Declarations for Google Workspace SDK


// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint: Ask Helpdesk
app.post('/api/helpdesk', async (req, res) => {
  try {
    const { prompt } = req.body;
    // Consider using gemini-2.5-flash as your fallback, as it's the newer default
    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash"; 

    const response = await genAI.models.generateContent({
      model: modelName,
      contents: prompt, // The new SDK intelligently wraps simple text prompts
      config: {
        systemInstruction: "Anda adalah SignFlow Support AI. Jawab dalam format MARKDOWN poin-poin."
      }
    });

    // In the new SDK, .text is a property, not a function ()
    res.status(200).json({ text: response.text.trim() });
  } catch (error) {
    console.error("Helpdesk Error:", error);
    res.status(500).json({ error: "Gagal Terhubung." });
  }
});

// Endpoint: Assistant Task


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
