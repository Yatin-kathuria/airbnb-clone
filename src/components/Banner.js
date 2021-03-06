import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        <Button
          variant="outlined"
          className="banner_searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner_info">
        <h1>
          Go <br /> Near
        </h1>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore nearby stays
        </Button>
      </div>
    </div>
  );
}

export default Banner;
