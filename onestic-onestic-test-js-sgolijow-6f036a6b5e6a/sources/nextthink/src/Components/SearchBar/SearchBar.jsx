
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Search, Searchvalue
} from "../../Redux/Actions";

import Style from "./searchbar.module.scss";


export function SearchBar() {
  const dispatch = useDispatch();
  const [Input, setInput] = useState({ input: "" });


  const handlechange = (e) => {
    e.preventDefault();
    setInput({ ...Input, [e.target.name]: e.target.value });
   
  };

  useEffect(() => {
      return dispatch(Searchvalue(Input.input))
  },[Input])


  return (
    <form>
    <div>
      <input
        className={Style.Input}
        placeholder="Search..."
        onChange={(e) => handlechange(e)}
        value={Input.input}
        name="input"
      ></input>
    </div>
    </form>
  );
}
