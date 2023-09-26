import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./Countrys.css";
import Country from "../Country/Country";

export default function Countrys(props) {

  return (
    <div className="countrysWrap">
      {props.countrys.map((country) => {
        const newCountry = { country, id: uuidv4() };

        return (
          <Country
            key={newCountry.id}
            country={newCountry}
            removeData={props.removeData}
          />

        );
      })}
    </div>
  );
}
