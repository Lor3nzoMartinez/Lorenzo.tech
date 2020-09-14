import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: Turn into button.

export default function Charm({ color, iconID, icon }) {
  return (
    <div className="border rounded p-1 mr-3">
      <FontAwesomeIcon
        className="d-flex align-items-center"
        color={color}
        size="lg"
        icon={[`${iconID}`, `${icon}`]}
      />
    </div>
  );
}
