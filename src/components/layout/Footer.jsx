import React from 'react';
import {AiFillYoutube, AiFillInstagram,
AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
   <footer>
    <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you the 
            best taste possible</p>
            <br />
            <em>We gie attention to genuine feedback.</em>
            <strong>
                All Right Received @mbaburgerwala
            </strong>
    </div>

        <aside>
            <h4>FOLLOW US</h4>
            <a href="#youtube"><AiFillYoutube/></a>
            <a href="#instagram"><AiFillInstagram/></a>
            <a href="#github"><AiFillGithub/></a>
        </aside>
   </footer>
  )
}

export default Footer