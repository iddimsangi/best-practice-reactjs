import React from "react";
import { useNavigate } from "react-router-dom";
const TotalCompleteItems = ({ total }) => {
  const navigate = useNavigate();

  console.log(total);
  return (
    <div className="d-flex justify-content-between">
      <h4 className="mt-3">Total Complete Items: {total}</h4>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate("/")}
      >
        &larr; back
      </button>
    </div>
  );
};

export default TotalCompleteItems;
