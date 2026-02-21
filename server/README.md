# MockMind Server

Backend server for MockMind ATS resume generation using Google Gemini.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file in the server directory:
```
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
```

3. Get your Gemini API key from: https://makersuite.google.com/app/apikey

## Running the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on http://localhost:3001

## API Endpoint

### POST /api/generate-ats-resume

Generates an ATS-optimized resume based on a job description.

**Request Body:**
```json
{
  "jobDescription": "string (required)",
  "baseResumeText": "string (optional)",
  "profile": {
    "name": "string (optional)",
    "education": "string (optional)"
  }
}
```

**Response:**
```json
{
  "atsResume": "string"
}
```
