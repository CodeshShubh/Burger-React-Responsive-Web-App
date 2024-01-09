import React from 'react';
import {Country, State} from "country-state-city";

const Shipping = () => {
  return (
    <section className='Shipping'>
        <main>
            <h1>Shipping Details</h1>
            <form>
                <div>
                    <label>H.NO.</label>
                    <input type="text" placeholder='Enter House No.' />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter City' />
                </div>
                <div>
                 <label>Country</label>
                 <select>
                    <option value="">Country</option>
                    {
                        Country && Country.getAllCountries().map(i=>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))
                    }
                 </select>
                 </div>
                 <div>
                 <label>State</label>
                 <select>
                    <option value="">State</option>
                    {
                        State && State.getStatesOfCountry("IN").map(i=>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))
                    }
                 </select>
                 </div>
                <div>
                    <label>Pincode</label>
                    <input type="text" placeholder='Enter House Pincode' />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="Number" placeholder='Enter Phone Number' />
                </div>
                <button type='submit'>Confirm Order</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping