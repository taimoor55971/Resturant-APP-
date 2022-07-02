import React from 'react'

const Navbar = ({ FilterItems, menuList }) => {
  console.log(menuList);
  return (
    <>
      <nav className="navbar">
        <div className="btn-grp">
                  {
                      menuList.map((item) => {
                          return (
                            <button
                              className="btn-group__item"
                              onClick={() => FilterItems(item)}
                            >
                              {item}
                            </button>
                          );
                      }
                      
                      )
          }
          {/* <button
            className="btn-group__item"
            onClick={() => FilterItems("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => FilterItems("evening")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => FilterItems("dinner")}
          >
            Dinner
          </button>
          {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button> */} 
        </div>
      </nav>
    </>
  );
};

export default Navbar