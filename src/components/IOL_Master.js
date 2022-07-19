import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gateway from "./Gateway";
import LoadingIndicator from "./LoadingIndicator";
import { fetchJson, sendJson } from "../backend";

import {
  loadGatewayIdentification,
  getGatewayIdendificaton,
  loadGatewayConfiguration,
  getGatewayConfiguration,
  postGatewayConfig,
  updateGatewayConfiguration,
} from "../store/entities/gateway";


export default function IOL_Master({ iol_master_data }) {
  //const [iolMaster, setIolMasterData] = React.useState(iol_master_data);
  const [iolMaster, setIolMasterData] = React.useState(null);

  async function loadIdentification() {
    const data = await fetchJson("/v1/gateway/identification");
    setIolMasterData(data);
  }

  React.useEffect(
    () => {loadIdentification(); }, 
    []
  );

  async function sendIdentification(Ident){
    await sendJson("POST", "/v1/slots/0/identification", {applicationSpecificTag:Ident, locationTag: "string", functionTag: "string"}  );
    loadIdentification();
  }

  if (!iolMaster) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {/*<Gateway iol_master_param={iol_master_data}></Gateway>*/}
      <Gateway 
        iol_master_param={iolMaster}
        onSendTag={sendIdentification}>
      </Gateway>
    </div>
  );
}