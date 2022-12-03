import React from "react";
import { useLocation, Link } from "react-router-dom";

const ViewEvent = (_) => {
  const { state } = useLocation();

  return (
    <div>
        <p>Hi there</p>
        <div>
          <strong>Id:</strong> {state.events.eventId}{" "}
        </div>
        <div>
          <strong>Name:</strong> {state.events.eventName}{" "}
        </div>

      {/* <Link to="/">
        <button>Back</button>
      </Link> */}
    </div>
  );
};

export default ViewEvent;