import React from 'react';
import {motion} from "framer-motion";
import me from "../../assets/founder.jpeg"
import { Link } from 'react-router-dom';
import {MdDashboard} from "react-icons/md";



const Me = () => {

    const options ={
        initial:{
            y:"-100",
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
        }
    };
  return (
   <section className='Profile'>

    <main>
        <motion.img src={me} alt='User' {...options}/>
        <motion.h5 {...options} transition={{delay:0.3}}>
             Shubhanshu
        </motion.h5>
        <motion.div  {...options} transition={{delay:0.5}} >

            <Link to="/admin/dashboard"
            style={{
                borderRadius:0,
                backgroundColor:'black'
            }}>
                <MdDashboard/>DashBoard</Link>

        </motion.div>
        <motion.div 
        initial={{x:"-100vw",
        opacity:0}}
        animate={{x:0,
        opacity:1}}
         >

            <Link to="/myorders">Orders</Link>

        </motion.div>


        <motion.button
        initial={{x:"-100vw",
        opacity:0}}
        animate={{x:0,
        opacity:1}}
        transition={{delay:0.3}} 
        >
            Logout
        </motion.button>
    </main>

   </section>
  )
}

export default Me