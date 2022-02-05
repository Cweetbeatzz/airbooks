import React from "react";
import styles from "./admin.styles.css";

function sidebar() {
  return (
    <div className=" mb-3" id={styles.sidebar}>
      <div className="mb-2">
        <h5>
          <strong>Home</strong>
        </h5>
      </div>
      <div className="mb-2">
        <h5>Account</h5>
      </div>{" "}
      <div className="mb-2">
        <h5>Register</h5>
      </div>{" "}
      <div className="mb-2">
        <h5>LogOut</h5>
      </div>
    </div>
  );
}

export default sidebar;
