import React from 'react';
import { Link } from 'react-router-dom';
import {RiFindReplaceLine} from "react-icons/ri";
import me from "../../assets/founder.jpeg"

const About = () => {
  return (
   <section className='about'>
    <main>
        <h1>About Us</h1>
        <article>
            <h1>MBA Burger Wala</h1>
        <p>We Are MBA SadaHua Bargur on the Universe</p>
        <p>Explore Variouse Burger and Foods 
            click below to see the menu
        </p>
        <Link to="/">
        <RiFindReplaceLine/>
        </Link>
        </article>
        
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="Founder" />
                        <h3>Shubhanshu</h3>
                    </div>
                    <p>Hellow My name is Shubhansu 
                        this place is good for test
                    </p>
                </article>
            </div>
    </main>
   </section>
  )
}

export default About