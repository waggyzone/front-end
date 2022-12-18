import React, { useState ,useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css'
import UserService from "../Api/UserService";

function Menu() {

const [user,setUser] = useState([]);

useEffect(() => {
UserService.findAllUser().then((promise) => setUser(promise.data))
},[])
console.log(user);
  return (
    <div className="menu">
      <h1 className="menuTitle">Foods</h1>
      <div className="menuList">
      {user.map((data,index) => (
      <span>{data.firstName}</span>
      ))}
     
        {MenuList.map((menuItem, key) => {
          return <MenuItem key={key} image={menuItem.image} name={menuItem.name} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
