import React from 'react'

const MenuCard = ({ MenuData }) => {
   
    return (
       
      <section className="main-card-container">
            {MenuData.map((item) => {
             const {id,name,description,image,price}=item
              return (
                <>
                  <div className="card-container" key={id}>
                    <div className="card">
                      <div className="card-body">
                        <span className="card-number card-circle subtle">
                          {id}
                        </span>
                        <span className="card-author subtle">{name}</span>
                        <h2 className="card-title">{item.name}</h2>
                        <span className="description subtle">
                          {description}
                                  </span>
                                  <span className="price subtle">{price}</span>        

                        <div className="card-read">Read</div>
                      </div>
                      <img src={image} alt="" className="card-media" />
                      <span className="card-tag subtle">Order Now</span>
                    </div>
                  </div>
                </>
              );
          })}
     
    </section>
  );
};

export default MenuCard