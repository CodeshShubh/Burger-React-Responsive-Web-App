import React from 'react';
import me from "../../assets/founder.jpeg"

const Users = () => {

    const arr = [1,2,3,4];

  return (
    <section className="tableClass">

        <main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                    <tr key={i}>
                        <td>#sdkfj</td>
                        <td>Shubh</td>
                        <td>
                            <img src={me} alt="" />
                            </td>
                        <td>₹23</td>
                        <td>Admin</td>
                        <td>{"24-23-1997"}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>

    </section>
  )
}

export default Users