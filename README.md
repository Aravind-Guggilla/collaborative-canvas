Real-Time Collaborative Drawing Canvas
Overview

This project is a real-time collaborative drawing application where multiple users can draw simultaneously on a shared canvas.
Each user joins by entering their name, selects a color, and starts drawing. All drawings are synchronized instantly across connected users using Socket.io.

The application is built from scratch using the HTML5 Canvas API, without using any drawing libraries.
sReal-Time Collaborative Drawing Canvas
Overview

This project is a real-time collaborative drawing application where multiple users can draw simultaneously on a shared canvas.
Each user joins by entering their name, selects a color, and starts drawing. All drawings are synchronized instantly across connected users using Socket.io.

The application is built from scratch using the HTML5 Canvas API, without using any drawing libraries.

Features Implemented:

Freehand drawing using mouse
Color selection (color picker + preset colors)
Real-time drawing synchronization across multiple users
High-performance canvas rendering (no React re-renders)
WebSocket-based communication (Socket.io)

Frontend:
React (Class Components only)
HTML5 Canvas API
CSS
React Router

Backend:
Node.js
Express.js
Socket.io

📂 Project Structure
collaborative-canvas/
├── src/
│   ├── components/
│   │   ├── Board/          # Canvas drawing logic
│   │   ├── Container/      # Layout + tools
│   │   ├── ColorCard/      # Color selection buttons
│   │   └── LoginForm/      # User name input
│   ├── App.js              # Routing configuration
│   └── index.js
├── server/
│   ├── index.js            # Socket.io server
│   └── package.json
├── README.md
└── ARCHITECTURE.md

How to Run the Project

Start the Backend Server
cd server
npm install
node index.js
Server runs on: http://localhost:5000
------------------------------------------
Start the Frontend
npm install
npm start

-----------------------------------------------
Frontend runs on: http://localhost:3000

How to Test

Open http://localhost:3000 in two different browsers or laptops

Enter different names

Start drawing

Drawings appear in real-time on all screens

-Upcoming Features ---->

-Ghost cursors (show other users’ mouse pointers)

-Undo / Redo (user-specific)

-Clear canvas

-Server-side drawing history

-Room-based drawing sessions

-Notes

No drawing libraries were used

All drawing logic is handled via native Canvas API

React state is intentionally not used for drawing (performance reasons)

Features Implemented:

Freehand drawing using mouse
Color selection (color picker + preset colors)
Real-time drawing synchronization across multiple users
High-performance canvas rendering (no React re-renders)
WebSocket-based communication (Socket.io)

Tech Stack--->

Frontend:
React (Class Components only)
HTML5 Canvas API
CSS
React Router

Backend:
Node.js
Express.js
Socket.io

📂 Project Structure
collaborative-canvas/
├── src/
│   ├── components/
│   │   ├── Board/          # Canvas drawing logic
│   │   ├── Container/      # Layout + tools
│   │   ├── ColorCard/      # Color selection buttons
│   │   └── LoginForm/      # User name input
│   ├── App.js              # Routing configuration
│   └── index.js
├── server/
│   ├── index.js            # Socket.io server
│   └── package.json
├── README.md
└── ARCHITECTURE.md

How to Run the Project

Start the Backend Server
cd server
npm install
node index.js
Server runs on: http://localhost:5000
------------------------------------------
Start the Frontend
npm install
npm start

-----------------------------------------------
Frontend runs on: http://localhost:3000

How to Test

Open http://localhost:3000 in two different browsers or laptops

Enter different names

Start drawing

Drawings appear in real-time on all screens

-Upcoming Features

-Ghost cursors (show other users’ mouse pointers)

-Undo / Redo (user-specific)

-Clear canvas

-Server-side drawing history

-Room-based drawing sessions

-Notes

No drawing libraries were used

All drawing logic is handled via native Canvas API

React state is intentionally not used for drawing (performance reasons)

