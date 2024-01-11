import React from 'react'
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <section className="PaymentSuccess">
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Sucessfully, You Can Check order Status below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess;