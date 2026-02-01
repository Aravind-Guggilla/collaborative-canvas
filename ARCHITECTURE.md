System Architecture – Real-Time Collaborative Canvas
Design Goal

The primary goal of this architecture is to support smooth real-time collaboration while keeping the drawing logic fast, predictable, and scalable.

High-Level Architecture
User Browser (React)
        |
        |  WebSocket Events
        v
Node.js Server (Socket.io)
        |
        |  Broadcast Events
        v
Other Connected Browsers

Frontend Architecture
LoginForm

Collects user name

Redirects to /container?name=<username>

2️.Container

Acts as the layout controller

Manages:

Selected drawing color

Tool buttons (Undo / Redo / Clear – future use)

Passes selected color to Board

3️.Board (Core Component)

The heart of the application.

Responsibilities:

Create and manage HTML5 canvas

Capture mouse events

Draw locally on the canvas

Send drawing data to server

Listen for remote drawing events

Mouse down → start drawing

Mouse move → draw locally

Serialize line segment:

{ startX, startY, endX, endY, color, lineWidth }

Emit draw-segment via Socket.io

Update last cursor position

Backend Architecture (Socket.io Server)
Server Responsibilities:

Accept WebSocket connections

Broadcast drawing events

Maintain real-time communication only (no drawing logic)

Server Event Flow
On connection:

Assign unique socket.id

Log user connection

On draw-segment:

Receive drawing data from one client

Broadcast to all other clients

On disconnect:

Remove user from active connections

Data Flow Summary
Drawing Data
Mouse Move
 → Board
 → socket.emit('draw-segment')
 → Server
 → socket.broadcast.emit('draw-segment')
 → Other Boards
 → Canvas Rendering

Scalability Plan

Future improvements include:

Server-side stroke history

User-specific undo logic

Room-based isolation

Ghost cursor overlays

Key Takeaway

The frontend owns rendering and interaction,
the backend owns synchronization and communication.

This separation keeps the system clean, fast, and extensible.

