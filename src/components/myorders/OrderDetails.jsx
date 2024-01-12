import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"skdjf kjdf kdjf "}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Shubhanshu "}
                </p>
                <p>
                    <b>Phone</b>
                    {"7060821855"}
                </p>
            </div>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"skdjf kjdf kdjf "}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {26-12-1997}
                </p>
                <p>
                    <b>Delevered At</b>
                    {26-12-1998}
                </p>
            </div>

            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>#{"kdjfklsf"}
                </p>
                <p>
                    <b>Paid At</b>
                    {26-12-1998}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>₹{4000}
                </p>
                <p>
                    <b>Shipping Charges</b>₹{100}
                </p>
                <p>
                    <b>Tax</b>₹{180}
                </p>
                <p>
                    <b>Total Amount</b>₹{10080}
                </p>
                
            </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
                <h4>Chese Burger</h4>
                <div>
                    <span>{12}</span> x <span>{129}</span>
                </div>
            </div>
            <div>
                <h4>Simple Burger</h4>
                <div>
                    <span>{2}</span> x <span>{100}</span>
                </div>
            </div>
            <div>
                <h4>Fries Burger</h4>
                <div>
                    <span>{9}</span> x <span>{10}</span>
                </div>
            </div>
            <div>
                <h4
                style={{
                    fontWeight:800,
                }}>SubTotal</h4>
                <div
                style={{
                    fontWeight:800,
                }}>₹{40000}</div>
            </div>
          </article>
        </main>
    </section>
  )
}

export default OrderDetails