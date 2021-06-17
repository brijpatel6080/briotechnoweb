import React from "react";

import pnf from '../assets/images/404.gif';
function NotFound() {
  return (
    <>
      <div className="container-fluid" >
        <img src={pnf} />
      </div>
    </>
  );
}

export default NotFound;
