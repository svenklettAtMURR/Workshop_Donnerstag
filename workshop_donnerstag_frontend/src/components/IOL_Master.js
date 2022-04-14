import React from "react";
import Gateway from "./Gateway";
import LoadingIndicator from "./LoadingIndicator";
import { fetchJson, sendJson } from "../backend";


export default function IOL_Master({ iol_master_data }) {
  //const [iolMaster, setIolMasterData] = React.useState(iol_master_data);
  const [iolMaster, setIolMasterData] = React.useState(null);

  async function loadIdentification() {
    const data = await fetchJson("/iolink/v1/gateway/identification");
    setIolMasterData(data);
  }

  React.useEffect(
    () => {loadIdentification(); }, 
    []
  );

  if (!iolMaster) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {/*<Gateway iol_master_param={iol_master_data}></Gateway>*/}
      <Gateway 
        iol_master_param={iolMaster}>
      </Gateway>
    </div>
  );
}