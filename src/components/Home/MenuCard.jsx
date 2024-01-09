import { motion } from 'framer-motion';
import React from 'react';


const MenuCard = ({itemNumb,burgerSrc,price,title, handler, delay }) => {
  return (
    <motion.div className='menuCard'
    
    initial={{x:"-100", opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay}}
    >
        <div>Item {itemNumb}</div>
        <main>
            <img src={burgerSrc} alt={itemNumb} />
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button  onClick={()=>handler(itemNumb)}>Buy Now</button>
        </main>
    </motion.div>
  )
}

export default MenuCard