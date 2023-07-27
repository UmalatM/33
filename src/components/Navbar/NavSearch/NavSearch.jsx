import React, { useState } from "react";
import cls from "./NavSearch.module.scss";

const NavSearch = ({className}) => {
    const [search,setSearch] = useState ("");

    const   handleChange = (e) => {

        setSearch (e.target.value);

    };

    const clearInput = () => {
        setSearch ("")
    }



    return (
        <form noValidate className={`${cls.NavSearch} ${className || ''}`}>
        <input type="text" placeholder="Search..." onChange={handleChange} value={search}/>
        {search && <span onClick={clearInput}>&times;</span> }
         

         {/*spinner*/}
         
        </form>
    );
};

export default NavSearch;

