import "./index.css";

const ColorCard = (props) => {
    const {colorItem, onColorChange} = props;
    const {color, value} = colorItem;
    const onchangeColor = () => {
        onColorChange(value);
    }
  return (
    <div className="color-div">
        <button className={`${color} color-cards`} value={value} onClick={onchangeColor}></button>
    </div>
  )
}

export default ColorCard;
