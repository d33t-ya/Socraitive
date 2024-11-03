### **APRIORA TAKE HOME CHALLENGE**

[PROJECT LINK](https://alias-apriora.vercel.app/)
[Video Demo](https://drive.google.com/file/d/1kHunKLZFo0IEZz2rejqzprPTrhAvLiuj/view?usp=sharing)

### Current Workflow

The application allows users to record their voice, which is converted to text using Speech-to-Text (STT). This text is then sent to the OpenAI API for processing, and the generated response is converted back to speech using Text-to-Speech (TTS) for the user to hear.

`Voice Recording --> Speech-to-Text (STT) --> OpenAI API Call --> Generated Response --> Text-to-Speech (TTS) --> User Hears Response`

### Future Improvements

If I had more time, I would focus on the following enhancements

1. **Proper end of the conversation**
1. **Add Zod for Better Type Safety**
1. **Make Better use of react states & optmize performance**
1. **Reduce Latency**
1. **Smoothing User Experience (UX)**
1. **Implement the User Report along with transcripts & timestamps**

### Features

- **Voice-Activated Dialogue (VAD):** Detects silence for automatic turn-taking.
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

- My commits and comments are consistent and focused. I prioritized maintaining clarity in commit messages, particularly for significant feature changes, and aimed for clean code while balancing development speed. Frequent commits were made to ensure easy rollback and iteration.

- The project architecture is designed for scalability and future extensibility. Using a modular folder structure (`src/commons`, `src/app`, `src/modules`, `src/services`) promotes code reuse and organization. This setup makes it easy to expand functionality or integrate new services as needed.

- My initial focus was on implementing and testing the TTS, STT, and interview agent services via Postman. Once these components were functional, I shifted to building the UI and integrating it with the backend. Time management was challenging, especially with the complex Voice-Activated Dialogue (VAD) system. Detecting silence accurately required significant trial and error, but it was essential to achieving smooth voice interaction.

- I thoroughly enjoyed this sprint, especially the engineering challenges that came with implementing a seamless voice interface. Solving the unknowns in real-time interaction was both fun and rewarding.
