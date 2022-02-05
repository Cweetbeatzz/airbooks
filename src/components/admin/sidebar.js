import React from "react";
import styles from "./admin.styles.css";
import {
  LineStyle,
  Mail,
  Payment,
  Report,
  Timeline,
  Work,
  WorkOutline,
  NotificationsNone,
  AccountBox,
  AccountBalance,
  Storefront,
} from "@material-ui/icons";

function sidebar() {
  return (
    <div>
      <div className=" mb-3" id={styles.sidebar}>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <LineStyle />
          </div>
          <div className="py-1">
            <h5>
              <strong>Home</strong>
            </h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <AccountBox />
          </div>
          <div className="py-1">
            <h5>Users</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <AccountBalance />
          </div>
          <div className="py-1">
            <h5>Sales</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Report />
          </div>
          <div className="py-1">
            <h5>Reports</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <NotificationsNone />
          </div>
          <div className="py-1">
            <h5>Notifications</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Work />
          </div>
          <div className="py-1">
            <h5>Staffs</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Payment />
          </div>
          <div className="py-1">
            <h5>Transactions</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Mail />
          </div>
          <div className="py-1">
            <h5>Mail</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Timeline />
          </div>
          <div className="py-1">
            <h5>Analytics</h5>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <WorkOutline />
          </div>
          <div className="py-1">
            <h5>Manage</h5>
          </div>
        </div>
      </div>

      <div className="dropdown-divider"></div>

      <div className=" mb-3" id={styles.sidebar}>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Storefront />
          </div>
          <div className="py-1">
            <h5>
              <strong>Products</strong>
            </h5>
          </div>
        </div>
        <div className="mb-2">
          <h5>Create</h5>
        </div>{" "}
        <div className="mb-2">
          <h5>Update</h5>
        </div>{" "}
        <div className="mb-2">
          <h5>Delete</h5>
        </div>
      </div>

      <div className="dropdown-divider"></div>
      <div className=" mb-3" id={styles.sidebar}>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Storefront />
          </div>
          <div className="py-1">
            <h5>
              <strong>Categories</strong>
            </h5>
          </div>
        </div>
        <div className="mb-2">
          <h5>Create</h5>
        </div>{" "}
        <div className="mb-2">
          <h5>Update</h5>
        </div>{" "}
        <div className="mb-2">
          <h5>Delete</h5>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default sidebar;
