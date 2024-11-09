### **Socraitive - AI Powered voice-to-voice Interviewer**

[PROJECT LINK](https://alias-socraitive.vercel.app/) and
[Video Demo](https://drive.google.com/file/d/1kHunKLZFo0IEZz2rejqzprPTrhAvLiuj/view?usp=sharing)

### Current Workflow

The application allows users to record their voice, which is converted to text using Speech-to-Text (STT). This text is then sent to the OpenAI API for processing, and the generated response is converted back to speech using Text-to-Speech (TTS) for the user to hear.

`Voice Recording --> Speech-to-Text (STT) --> OpenAI API Call --> Generated Response --> Text-to-Speech (TTS) --> User Hears Response`

### Features

- **Voice-Activated Dialogue (VAD):** Uses a Voice Activity Detection (VAD) system that detects silence to enable automatic turn-taking, creating a natural conversational flow without the need for manual prompts.
- **Speech-to-Text (STT) Integration:** Converts spoken answers into text for processing.
- **Text-to-Speech (TTS) Responses:** AI-generated responses are played back via TTS.
- **Smooth UI Components:** Built with tailwind, providing a clean, responsive user interface.

### Project Structure

```plaintext
src
├── commons          # Reusable libraries, utilities, hooks, and UI components
│   ├── lib          # Helper functions and utilities
│   ├── components   # Common components & external
│   ├── hooks        # Custom React hooks
│   └── styles       # Global styles
│   └── services     # Common services
├── app              # Main application code
│   ├── api          # API routes and handlers
├── modules          # UI sections and specific components for different screens
└── services         # External service integrations (e.g., TTS, STT)
```
