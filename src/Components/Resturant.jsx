import React, { useState } from 'react'
import "./Resturant.css"
import Menu from "../MenuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(
  Menu.map((item) => {
    return item.category;
  }
  )),"All"]

console.log(uniqueList);

const Resturant = () => {
  const [MenuData, setMenuData] = useState(Menu)
  const [MenuList, setMenuList] = useState(uniqueList);

  
  
  let FilterItems = (category) => {
    if (category === "All") {
     return setMenuData(Menu)
      
}

    let updatedList = Menu.filter((item) => {
      return item.category === category;
    })
    setMenuData(updatedList);
  }

  return (
    <>
    <h1>Raju Ka Dhaba</h1>
   <Navbar  FilterItems={FilterItems} menuList={MenuList}/>
      <MenuCard MenuData={MenuData} />
    </>
  );
}

export default Resturant