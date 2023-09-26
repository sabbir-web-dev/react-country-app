import React, { useEffect, useState } from "react";

import "./Search.css";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  const searchHendel = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchText);
  },[searchText]);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search your Country"
        onChange={searchHendel}
        value={searchText}
      />
    </div>
  );
}
