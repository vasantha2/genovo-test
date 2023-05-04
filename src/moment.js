import React from "react";
import moment from "moment";

const MyComponent = () => {
  const date = "2022-05-04T10:00:00Z";
  const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default MyComponent;
