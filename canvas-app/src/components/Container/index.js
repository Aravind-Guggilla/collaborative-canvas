import { Component } from "react";
import ColorCard from "../colorCard";
import { CgCornerUpLeft , CgCornerUpRight  } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import Board from "../Board";
import "./index.css";


const colors = [
  {
    "id": 1, 
    "color": "black", 
    "value": "#000000"
  }, 

  {"id": 2, 
    "color": "red", 
    "value": "#ef4444"
  }, 

  {"id": 3, 
    "color": "green", 
    "value": "#10b981"
  }, 

  {"id": 4, 
    "color": "blue", 
    "value": "#3b82f6"
  }, 

  {"id": 5, 
    "color": "yellow", 
    "value": "#eab308"
  }, 

  {"id": 6, 
    "color": "pink", 
    "value": "#ec4899"
  }
]

class Container extends Component {
  state = {
    color: colors[0].value
  };

  onColorChangeInput = (event) => {
    this.setState({
      color: event.target.value
    });
  };

  onColorChange = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };

  render() {
    const { color } = this.state;

    return (
      <div className="container">
        <div className="color-picker-card">
          <input
            type="color"
            value={color}
            onChange={this.onColorChangeInput}
          />

         <div className="color-bar">
           {/* <button className="black color-cards"></button>
           <button className="red color-cards" ></button>
           <button className="green color-cards"></button>
           <button className="blue color-cards"></button>
           <button className="yellow color-cards"></button>
           <button className="pink color-cards"></button> */}
           {colors.map((eachItem) => (
             <ColorCard colorItem={eachItem} key={eachItem.id} onColorChange={this.onColorChange}/>
           ))}
         </div>

          <div className="tool-card">
            <div className="button-card">
                 <button className="tool-btn" title="Undo"><CgCornerUpLeft/></button>
            </div>
            <div className="button-card">
                 <button className="tool-btn" title="Redo"><CgCornerUpRight /></button>
            </div>
            <div className="button-card">
                 <button className="tool-btn delete" title="Delete"><MdDelete/></button>
            </div>

          </div>

        </div>

        <div className="board-container">
          <Board color={color} />
        </div>
      </div>
    );
  }
}

export default Container;
