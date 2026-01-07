#project_name: AI-Assisted Text Classification API

overview:
  description: >
    This project is a backend REST API developed as part of the technical
    assignment for Indus Net Technologies Ltd. The API accepts a text input
    and classifies it into predefined categories such as Complaint, Query,
    Feedback, or Other using an AI-based approach.

~categories:
  - Complaint
  - Query
  - Feedback
  - Other

~tech_stack:
  backend:
    - Node.js
    - Express.js
  ~ai_service:
    - OpenAI API
  ~utilities:
    - dotenv
    - Postman

project_structure:
  src:
    controllers:
      - classifyController.js
    routes:
      - classifyRoutes.js
    services:
      - aiService.js
    utils:
      - responseFormatter.js
    entry_point:
      - server.js

api_details:
  endpoint:
    method: POST
    path: /api/classify
  request_body:
    type: JSON
    example:
      text: "I am not able to login to my account"
  response:
    example:
      result: "Category: Query, Confidence: 90%"

setup_instructions:
  step_1:
    description: Install all required packages
    command: npm install
  step_2:
    description: Configure environment variables
    details:
      file: .env
      variables:
        OPENAI_API_KEY: your_openai_api_key_here
  step_3:
    description: Start the server
    command: node server.js
    output: Server running on port 5000

error_handling:
  - Handles empty or missing input text
  - Returns meaningful error messages
  - Uses appropriate HTTP status codes
  - Handles AI service failures gracefully

testing:
  tools:
    - Postman
    - Any REST client
  notes: >
    Send a POST request with text input to verify
    correct category classification.

conclusion: >
  This project demonstrates a clean and scalable backend
  implementation of an AI-assisted text classification service.
  It follows modular architecture and fulfills all the requirements
  specified in the assignment.

