import React, { useState } from "react";
import * as CONSTANT from "../../Constants/API_DATA";
import "./search.css";
export default function Search(props) {
  const [searchVal, setSearchVal] = useState("");
  const onSubmit = () => {
    fetch(
      `${CONSTANT.GEO_URL}/direct?q=${searchVal}&limit=5&appid=${CONSTANT.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].lat);
        console.log(data[0].lon);
        props.searchHandler({
          value: `${data[0].lat} ${data[0].lon}`,
          label: `${data[0].name} ${data[0].country}`,
        });
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button className="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}
