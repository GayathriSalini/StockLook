import React, {useState, useEffect}from "react";
/* import { Link } from "react-router-dom"; */
import axios from "axios";


const Orders = () => {
    
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3002/allOrders")
        .then((res) => {
            console.log(res.data);
            setAllOrders(res.data);
        })
    })
    
    
    return (
       <>
        <h3 className="title">Positions ({allOrders.length})</h3>
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                         <th>Order Id</th>
                         <th>Name</th>
                         <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order) =>{
                          return(  
                            <tr>
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                            </tr>
                          )
                        })}
                    </tbody>
                </table>
          {/*       <p>You haven't placed any orders today</p>
                <Link to={"/"} className="btn">Get Started</Link> */}
            </div>
=

        </> 
    )
};

export default Orders;
