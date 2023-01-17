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
import { Link } from "react-router-dom";

function sidebar() {
  return (
    <div>
      <div className=" mb-3 mt-4" id={styles.sidebar}>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <LineStyle />
          </div>
          <div className="py-1">
            <Link to="/home">
              <strong>Home</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <AccountBox />
          </div>
          <div className="py-1">
            <Link to="/account">
              <strong>Users</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <AccountBalance />
          </div>
          <div className="py-1">
            <Link to="/Sales">
              <strong>Sales</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Report />
          </div>
          <div className="py-1">
            <Link to="/Reports">
              <strong>Reports</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <NotificationsNone />
          </div>
          <div className="py-1">
            <Link to="/Notifications">
              <strong>Notifications</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Work />
          </div>
          <div className="py-1">
            <Link to="/roles">
              <strong>Roles</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Payment />
          </div>
          <div className="py-1">
            <Link to="/Transactions">
              <strong>Transactions</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Mail />
          </div>
          <div className="py-1">
            <Link to="/Mail">
              <strong>Mail</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Timeline />
          </div>
          <div className="py-1">
            <Link to="/Analytics">
              <strong>Analytics</strong>
            </Link>
          </div>
        </div>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <WorkOutline />
          </div>
          <div className="py-1">
            <Link to="/Manage">
              <strong>Manage</strong>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="dropdown-divider"></div> */}

      <div className=" mb-3" id={styles.sidebar}>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Storefront />
          </div>
          <div className="py-1">
            <Link to="/ProductList">
              <strong>Products</strong>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="dropdown-divider"></div> */}
      <div className=" mb-3" id={styles.sidebar}>
        <div className="d-flex mb-2 mx-2">
          <div className="px-1">
            <Storefront />
          </div>
          <div className="py-1">
            <Link to="/Categories">
              <strong>Categories</strong>
            </Link>
          </div>
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
