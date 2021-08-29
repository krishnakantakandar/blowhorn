import React from "react";

function ListInfo(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          background: "#FECE2F",
        }}
      />
      <span style={{ marginLeft: "10px", marginBottom: "10px" }}>
        {props.description}
      </span>
    </div>
  );
}

export default ListInfo;
