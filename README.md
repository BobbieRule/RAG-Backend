# RAG-Backend

## Prerequisites

- Node.js version 20.10.0

## Setup Instructions

### 1. Install Dependencies:

   ```bash
   npm i
   ```

### 2. Configure Environment:

   ```bash
   cp .env.example .env
   ```

   Add values for the environment keys in the .env file.

### 3. Run the Server:

   ```bash
   npm run dev
   ```

   On the specified localhost port, you will see:

   ```json
   {
     "status": true,
     "message": "Hello World",
     "data": null
   }
   ```
