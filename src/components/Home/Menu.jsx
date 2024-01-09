import React from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


const Menu = () => {

const addToCartHandler =(itemNumb)=>{

}

  return (
    <section id='menu'>
      <h1>Menu</h1>
      <div>
        <MenuCard itemNumb={1}
        burgerSrc={burger1}
         price={200}
        title ="Chesee Burger"
        handler ={addToCartHandler}
        delay={0.1}
        />
         <MenuCard itemNumb={2}
        burgerSrc={burger2}
         price={500}
        title ="Simple Burger"
        handler ={addToCartHandler}
        delay={0.5}
        />
         <MenuCard itemNumb={3}
        burgerSrc={burger3}
         price={400}
        title ="Bhuna Burger"
        handler ={addToCartHandler}
        delay={0.8}
        />
        
      </div>
    </section>
  )
}

export default Menu;