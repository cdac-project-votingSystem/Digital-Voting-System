import { useState } from "react";
import { Link } from "react-router-dom";

function ColoredBox(props) {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = {
    backgroundColor: props.color, // Background color from props
    width: "300px",
    height: "400px",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    textDecoration: "none", // Remove default link underline
    border: isHovered ? "2px solid black" : "none", // Border on hover
    color:"black",
    fontSize:"30px"
    
    
  };

  return (
    <Link
      to={props.path} // Takes path from props
      style={{ textDecoration: "none" }} // Ensures no underline on the link
    >
      <div
        style={boxStyle}
        className="m-3 rounded"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>{props.text}</p>
      </div>
    </Link>
  );
}


export default ColoredBox
