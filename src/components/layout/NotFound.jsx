import React from 'react';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='notfound'>
        <main>
            <div>
                <MdError/>
                <h1>404</h1>
                <p>
    Page not found, Getting Error Click below to go to homepage
                </p>

            </div>
            <Link to="/">Go To Home</Link>
        </main>
    </section>
  )
}

export default NotFound