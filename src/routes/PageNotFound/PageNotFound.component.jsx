import React from "react";
import Text from "../../Components/Text";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";

const PageNotFound = () => (
  <>
    <Breadcrumb />
    <img
      className="img-fluid"
      src={require("../../assets/PageNotFound.png")}
      alt="404"
    />
  </>
);

export default PageNotFound;
