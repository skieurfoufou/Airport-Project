import React from "react";
import "./TableDepartures.css";
import StickyHeadTable from "../StickyHeadTable/StickyHeadTable";

function TableDepartures() {
  return (
    <>
      <div className="tableDeparture-div-title">
        <h1>Table Departures</h1>
      </div>
      <StickyHeadTable />
    </>
  );
}

export default TableDepartures;
