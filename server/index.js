import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-ats-resume', async (req, res) => {
  try {
    const { jobDescription, baseResumeText, profile } = req.body;

    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Construct the prompt
    let prompt = `You are an expert resume writer and ATS optimization specialist. Rewrite and structure the candidate's resume so it scores highly in ATS systems for the given job description. Preserve truthful experience, but highlight the skills, projects, and achievements that match the job description. Format the output as a clean, single-column resume, using headings like Summary, Skills, Experience, Projects, Education.

Job Description:
${jobDescription}
`;

    if (baseResumeText && baseResumeText.trim()) {
      prompt += `\n\nCandidate's Original Resume:\n${baseResumeText}\n`;
    }

    if (profile?.name) {
      prompt += `\n\nCandidate Name: ${profile.name}\n`;
    }

    if (profile?.education) {
      prompt += `\n\nEducation: ${profile.education}\n`;
    }

    prompt += `\n\nPlease generate an ATS-optimized resume that matches the job description. Focus on relevant keywords, skills, and experiences.`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const atsResume = response.text();

    res.json({ atsResume });
  } catch (error) {
    console.error('Error generating ATS resume:', error);
    res.status(500).json({ 
      error: 'Failed to generate ATS-friendly resume',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
