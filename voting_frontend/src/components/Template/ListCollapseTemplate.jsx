import React from "react";

const ListCollapseTemplate = ({ arr }) => {
  return (
    <div>
      {arr.map((ele, index) => {
        // Ensure unique collapse ID for each item
        const collapseId = `collapse-${index}`;
        return (
          <div key={index} className="collapse-container " id="collapseMain" >
            <ul className="list-group">
              <li className="list-group-item" >
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId} 
                style={{ width:"100%",textAlign: "left",backgroundColor:"#7AB2D3 ",fontFamily:"monospace",fontSize:"14px"} }


                >
                  {ele.key}
                </button>
                <div className="collapse"  id={collapseId} >
                  <div className="card card-body " style={{fontFamily:"monospace",backgroundColor:"#DFF2EB ",fontSize:"14px"}}>{ele.value}</div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListCollapseTemplate;


