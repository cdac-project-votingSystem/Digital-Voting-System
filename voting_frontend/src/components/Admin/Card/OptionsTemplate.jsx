import { useState } from "react";
import { Link } from "react-router-dom";

function OptionsTemplate({path,text,color}) {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = {
    backgroundColor: color, 
    border: isHovered ? "2px solid black" : "none", 
    width: "300px",
    height: "400px",
    borderRadius: "30px",
    display: "flex" ,
    alignItems: "center" ,
    justifyContent: "center" , 
    transition: "all 0.3s ease",
    textDecoration: "none" ,
    color:"black" ,
    fontSize:"30px" 
    
  };

  return (
    <Link
      to={path} 
      style={{ textDecoration: "none" }} 
    >
      <div
        style={boxStyle}
        id="optionsTemplate"
        className="m-3 rounded"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>{text}</p>
      </div>
      <br />
      <br />
    </Link>
  );
}


export default OptionsTemplate;
