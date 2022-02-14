import React from "react";
import { NotificationsNone, Settings } from "@material-ui/icons";
import styles from "./admin.styles.css";
import Sidebar from "./sidebar";

function Admin() {
  return (
    <div>
      <br />
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 mx-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 p-4 border-bottom">
              <h1 className="h4 text-info">
                <strong> ADMIN DASHBOARD</strong>
              </h1>

              <div className="d-flex ">
                <div className="mx-2">
                  <NotificationsNone />
                  <span className="" id={styles.badgeicon}>
                    2
                  </span>
                </div>
                <div>
                  <Settings />
                </div>
              </div>
            </div>

            <div className="container d-lg-flex d-md-flex d-sm-block  ">
              <div className="col-2 mx-auto ">
                <Sidebar />
              </div>

              <div className="col-10 mx-auto ">
                <div className="col-12 d-flex mx-auto m-1 ">
                  <div className="m-2 w-100">
                    <div className="card  bg-opacity-25">
                      <div className="card-body">
                        <div>
                          <h4 className="card-title text-center text-warning">
                            <strong>PROFILE</strong>
                          </h4>
                          <hr className="btn-black" />
                        </div>

                        <div className=" p-2 m-2 text-center text-muted">
                          <p>
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets. Ensure Safety measures
                            in stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assetsEnsure Safety measures in
                            stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets Ensure Safety measures
                            in stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets Ensure Safety measures
                            in stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assetsEnsure Safety measures in
                            stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets Ensure Safety measures
                            in stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets Ensure Safety measures
                            in stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on
                            assetsEnsure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets Ensure Safety measures
                            in stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on assets
                            Ensure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assetsEnsure Safety measures in
                            stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on
                            assetsEnsure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assetsEnsure Safety measures in
                            stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on
                            assetsEnsure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assetsEnsure Safety measures in
                            stakes to secure the protocol in exchange for
                            protocol incentives and avoid Liquidation on
                            assetsEnsure Safety measures in stakes to secure the
                            protocol in exchange for protocol incentives and
                            avoid Liquidation on assets
                          </p>
                        </div>

                        <hr className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Admin;
