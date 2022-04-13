import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gateway from "./Gateway";
import {loadGatewayIdentification, getGatewayIdendificaton} from "../store/entities/gateway";


export default function IOL_Master({ iol_master_data }) {
  //const [iolMaster, setIolMasterData] = React.useState(iol_master_data);
  //const dispatch = useDispatch();
  //const gatewayIdent = useSelector(getGatewayIdendificaton);

  /*useEffect(
    () => { dispatch(loadGatewayIdentification()); },
    [] //nur 1x rendern
  );*/

  return (
    <div>
      <Gateway iol_master_param={iol_master_data}></Gateway>
    </div>
  );
}