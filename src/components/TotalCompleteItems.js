import React from "react";

const TotalCompleteItems = ({ total }) => {
  console.log(total);
  return <h4 className="mt-3">Total Complete Items: {total}</h4>;
};

export default TotalCompleteItems;
