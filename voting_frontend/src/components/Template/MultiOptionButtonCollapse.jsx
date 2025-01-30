import React from "react";

const MultiOptionButtonCollapse = ({ title, setActiveTitle, activeTitle }) => {
  return (
    <div>
      <button
        className="btn "
        type="button"
        // data-bs-toggle="collapse"
        // data-bs-target="#collapseMain"
        // aria-expanded="false"
        // aria-controls="collapseMain"

    
        onClick={() => setActiveTitle(title)}

        style={{ width:"100%",backgroundColor:"#4A628A",color:"white"}}
      >
        <b>
        {title}

        </b>
      </button>
    </div>
  );
};

export default MultiOptionButtonCollapse;
