const content = {
  main: {
    title: "WhizApp",
    description:
      "Streamline and Empower Your WhatsApp Experience with AI-Driven Management",
    info: "WhatsApp Desktop Assistant (GPT3.5-Powered)",
    intro:
      "Welcome to the WhatsApp Desktop Assistant! This application is a GPT3.5-powered chatbot that acts as an assistant based on the user's Context . It leverages the power of GPT3.5 turbo, to provide intelligent responses and assist with various tasks.",
    logo: "icon.png",
    repository: "https://github.com/KM8Oz/WhizApp",
    link: "http://dl.whizapp.dup.company/",
  },
  Features: [
    {
      feature: "Intelligent Chatbot",
      intro:
        "The assistant is built using GPT2, a state-of-the-art language model, which enables it to generate human-like responses based on the user’s chat history.",
    },

    {
      feature: "Contextual Understanding",
      intro:
        "By analyzing the user's chat history, the assistant can understand the context and provide relevant and personalized responses.",
    },
    {
      feature: "Task Assistance",
      intro:
        "The assistant can perform various tasks such as sending messages, retrieving chat history, managing contacts, and more.",
    },
    {
      feature: "WhatsApp Integration",
      intro:
        "The application is seamlessly integrated with WhatsApp, allowing users to interact with their WhatsApp account directly from the desktop application.",
    },
    {
      feature: "Golang and Fyne.io Framework",
      intro:
        "The application is developed using the Go programming language and utilizes the Fyne.io framework for building the user interface.",
    },
    {
      feature: "Google Image optimazed search",
      intro:
        "the bot provide an image search engine inside your whatsapp device.",
    },
  ],
  
  Installation: [
    {
      step: "Clone the repository",
      description: "git clone https://github.com/KM8Oz/WhizApp.git",
    },
    {
      step: "Install dependencies:",
      description: "go mod tidy",
    },
    {
      step: "Build and run the application",
      description: "go build `then` ./whatsapp-desktop-assistant",
    },
  ],

  Usage: [
    {
      step: "Launch the application",
      description:
        "Once the application is running, the WhatsApp Desktop Assistant will start, and the user interface will be displayed.",
    },
    {
      step: "Authenticate with WhatsApp",
      description:
        "Authenticate the application with your WhatsApp account by scanning the QR code displayed in the application. This will establish a secure connection with your WhatsApp account",
    },
    {
      step: "Interact with the Assistant",
      description:
        "Begin chatting with the assistant by typing in the input field and pressing Enter. The assistant will generate responses based on your chat history and provide relevant information or assistance.",
    },
    {
      step: "Perform Tasks",
      description:
        "You can ask the assistant to perform various tasks such as sending messages, retrieving chat history, managing contacts, and more. Simply provide the necessary commands or instructions, and the assistant will execute them accordingly.",
    },
  ],

  Client: {
    file:"client.go",
    info: "This file is an integral part of the Whatsapp Business Manager app. It handles the communication with the Whatsapp server, processes incoming messages, and generates responses using the OpenAI GPT-3.5 language model.",
  },

  Configuration: [
    {
      config: "phoneNumber",
      intro: "Your WhatsApp account phone number.",
    },
    {
      config: "clientName",
      intro: "The name of the client.",
    },
    {
      config: "sessionFile",
      intro: "The file path to store the session information.",
    },
    {
      config: "timeout",
      intro: "The timeout duration for the WhatsApp connection.",
    },
  ],
  Libraries: [
    {
      import: "bytes",
      info: "Provides functions for working with byte slices.",
    },
    {
      import: "context",
      info: "Provides a context for managing concurrent operations.",
    },
    {
      import: "encoding/csv",
      info: "Implements CSV encoding and decoding.",
    },
    {
      import: "encoding/json",
      info: "Implements JSON encoding and decoding.",
    },
    {
      import: "fmt",
      info: "Implements formatted I/O operations.",
    },
    {
      import: "io/ioutil",
      info: "Provides I/O utility functions.",
    },
    {
      import: "net/http",
      info: "Provides HTTP client and server implementations.",
    },
    {
      import: "os",
      info: "Provides I/O utility functions.",
    },
    {
      import: "fyne.io/fyne/v2",
      info: "Fyne toolkit for building graphical user interfaces.",
    },
    {
      import: "github.com/tmc/langchaingo/llms/openai",
      info: "OpenAI-based language model for LLM.",
    },
    {
      import: "go.mau.fi/whatsmeow",
      info: " Custom package for working with Whatsapp.",
    },
    {
      import: "google.golang.org/protobuf/proto",
      info: "google.golang.org/protobuf/proto",
    },
  ],

  Acknowledgements: [
    {
      skill: "GPT3",
      description:
        "This project utilizes the power of GPT3, a language model developed by OpenAI",
    },
    {
      skill: "GoLang",
      description:
        "The application is built using the Go programming language and the Fyne.io framework.",
    },
    {
      skill: "Github",
      description:
        "Special thanks to the open-source community for providing valuable resources and libraries.",
    },
  ],
  License: {
    info: "This project is licensed under the MIT License.",
  },
};

export default content;
