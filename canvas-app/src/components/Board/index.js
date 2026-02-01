import {Component} from 'react'
import './index.css'
import {io} from 'socket.io-client'

// STEP-2 :
// Connect client to Socket.io SERVER (not React server)
// const socket = io('http://localhost:5000')
const socket = io(import.meta.env.VITE_SOCKET_URL)

class Board extends Component {
  componentDidMount() {
    this.drawOnCanvas()
    this.connectSocket()
  }

  connectSocket = () => {
    socket.on('connect', () => {
      console.log('Connected to server with id:', socket.id)
      // socket.on('user-joined', data => {
      //   console.log(data.userId) // socket id
      //   console.log(data.name)   // aravind
      // })
    })

    // STEP-3 UPDATE:
    // Listen for drawing data sent by OTHER users
    socket.on('draw-segment', data => {
      this.drawRemoteSegment(data)
      console.log('Received drawing data:', data)
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })
  }

  // STEP-3 UPDATE:
  // Draw stroke received from server (remote user)
  drawRemoteSegment = data => {
    const {startX, startY, endX, endY, color, lineWidth} = data

    const ctx = this.ctx
    if (!ctx) return

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()
  }

  drawOnCanvas = () => {
    const canvas = this.canvasRef
    const ctx = canvas.getContext('2d')

    // STEP-3 UPDATE:
    // Store context reference for remote drawing
    this.ctx = ctx

    let isDrawing = false
    let lastX = 0
    let lastY = 0

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = 5
    }

    const getCanvasCoordinates = event => {
      const rect = canvas.getBoundingClientRect()
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    // STEP-3 UPDATE:
    // Serialize and emit drawing data to server
    // we are sending only the segment being drawn currently to server
    // to broadcast to other users who connected to the server
    const emitDrawSegment = (startX, startY, endX, endY, color) => {  
      socket.emit('draw-segment', {
        startX,
        startY,
        endX,
        endY,
        color,
        lineWidth: 5,
      })
    }

    const onMouseDown = event => {
      const {x, y} = getCanvasCoordinates(event)
      isDrawing = true
      lastX = x
      lastY = y
    }

    const onMouseMove = event => {
      if (!isDrawing) return

      const {color} = this.props
      const {x, y} = getCanvasCoordinates(event)

      // Local drawing (existing logic)
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(x, y)
      ctx.stroke()

      // STEP-3 UPDATE:   
      // Send this stroke segment to server to broadcast to other users 
      emitDrawSegment(lastX, lastY, x, y, color)

      lastX = x
      lastY = y
    }

    const onMouseUp = () => {
      isDrawing = false
    }

    setCanvasSize()

    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('mouseleave', onMouseUp)

    window.addEventListener('resize', setCanvasSize)
  }

  render() {
    return (
      <div>
        <canvas
        ref={ref => {
          this.canvasRef = ref
        }}
        className="board"
      />     
      </div>
      
    )
  }
}

export default Board
