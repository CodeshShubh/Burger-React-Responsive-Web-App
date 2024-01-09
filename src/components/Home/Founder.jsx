import React from 'react';
import {motion} from "framer-motion";
import me from "./founder.jpeg";


const Founder = () => {

  

  return (
    <section className="founder">
    <motion.div>
        <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Shubhanshu Saadhiyaan</h3>
            <p>I am a full stack developer with experience in MERN Stack development,
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
    </motion.div>

    </section>
  )
}

export default Founder