import React, {useContext} from "react";
import PropTypes from "prop-types";
import RouteContext from "#context/routeContext";
import SeatsWagonDetailsBody from "./SeatsWagonDetailsBody/SeatsWagonDetailsBody";
import SeatsScheme from "../SeatsScheme/SeatsScheme";
import "./SeatsWagonDetails.css";


function SeatsWagonDetails({data, identity}) {
  const {routeState} = useContext(RouteContext);


  return (
    <div className="seats__wagon-details wagon-details" id={`wagon-details-${identity}`}>
      <SeatsWagonDetailsBody 
        data={data} 
        wagonType={identity === "departure" ? routeState.departureClass : routeState.arrivalClass}
        wagonId={identity === "departure" ? routeState.departureId :  routeState.arrivalId}
      />
      <SeatsScheme 
        data={data} 
        wagonType={identity === "departure" ? routeState.departureClass : routeState.arrivalClass}
        wagonId={identity === "departure" ? routeState.departureId :  routeState.arrivalId}
      />
    </div>
  );
}

export default SeatsWagonDetails;

SeatsWagonDetails.propTypes = {
  data: PropTypes.array.isRequired, 
  identity: PropTypes.string.isRequired, 
};