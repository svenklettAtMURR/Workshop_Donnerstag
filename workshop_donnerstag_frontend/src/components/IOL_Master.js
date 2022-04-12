import React from "react";
import Gateway from "./Gateway";

export default function IOL_Master({ iol_master_data }) {
  //const [iolMaster, setIolMasterData] = React.useState(iol_master_data);

  return <Gateway iol_master_param={iol_master_data} />;
}