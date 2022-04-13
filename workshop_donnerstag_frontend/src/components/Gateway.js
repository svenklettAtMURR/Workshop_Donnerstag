import React from "react";

export default function Gateway({ iol_master_param }) {
  const [postValue, setPostValue] = React.useState("");
  const sendInvalid = postValue.length === 0;

  function handleSendClick() {
    //alert(`Sending ${postValue} to server...`);
  }

  return (
    <div>
      <h4>Gateway information:</h4>
      <ul>
        <li>Mac-Address: {iol_master_param.macAddress}</li>
        <li>Serial-Number: {iol_master_param.serialNumber}</li>
        <li>Product-ID: {iol_master_param.productId}</li>
        <li>Vendor-Namer: {iol_master_param.vendorName}</li>
        <li>Product-Name: {iol_master_param.productName}</li>
        <li>Hardware-Revision: {iol_master_param.hardwareRevision}</li>
        <li>Firmware-Revision: {iol_master_param.firmwareRevision}</li>
        <li>Product-Instance-Uri: {iol_master_param.productInstanceUri}</li>
      </ul>
      <br></br>
      <br></br>
      <h4>Set Gateway values:</h4>
      <input value={postValue} onChange={(e) => setPostValue(e.target.value)} />
      {/*<span>{x}</span>*/}
      <br></br>
      <br></br>
      <button disabled={sendInvalid} onClick={handleSendClick}>
        Send
      </button>
    </div>
  );
}