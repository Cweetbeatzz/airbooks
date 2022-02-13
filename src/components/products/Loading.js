import React from "react";
import style from "./loading.styles.css";

function Loading() {
  return (
    <div className="text-center mx-auto justify-content-center">
      <div id="">
        <img src="images/loadingg.png" id={style.loading} alt="" />
      </div>
      <br />
      <h5>Loading...</h5>
    </div>
  );
}

export default Loading;
