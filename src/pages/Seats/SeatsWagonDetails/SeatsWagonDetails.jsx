import React from "react";
import PropTypes from "prop-types";
import SeatsWagonDetailsBody from "./SeatsWagonDetailsBody/SeatsWagonDetailsBody";
import SeatsScheme from "../SeatsScheme/SeatsScheme";
import "./SeatsWagonDetails.css";


function SeatsWagonDetails({data, identity, type, wagonId}) {
  return (
    <div className="seats__wagon-details wagon-details" id={`wagon-details-${identity}`}>
      <SeatsWagonDetailsBody 
        data={data} 
        wagonType={identity === "departure" ? type.depClass : type.arrClass}
        wagonId={identity === "departure" ? wagonId.depName :  wagonId.arrName}/>
      <SeatsScheme data={data} wagonType={identity === "departure" ? type.depClass : type.arrClass}/>
    </div>
  );
}

export default SeatsWagonDetails;

SeatsWagonDetails.propTypes = {
  data: PropTypes.array.isRequired, 
  identity: PropTypes.string.isRequired, 
  type: PropTypes.object.isRequired, 
  wagonId: PropTypes.object.isRequired, 
};