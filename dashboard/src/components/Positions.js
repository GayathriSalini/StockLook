import React, {Fragment, useEffect, useState } from "react"; //if needed like import keys then change
/* import { positions } from "../data/data"; */

import axios from "axios";



const Positions = () => {

   const [ allPositions, setAllPositions ] = useState([]);
   useEffect(() => {
       axios.get("http://localhost:3002/allPositions")
           .then((res) => {
               console.log(res.data);
               setAllPositions(res.data);
           })
   }, []);


    return (
        <>
           <h3 className="title">Positions ({allPositions.length})</h3>
           <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
            
              <tbody>
                {allPositions.map((position) => {
                  const curValue = position.price * position.qty;
                  const isProfit = curValue - position.avg * position.qty >= 0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = position.isLoss ? "loss" : "profit";
            
                  return (
                    <tr key={position._id}>
                      <td>{position.product}</td>
                      <td>{position.name}</td>
                      <td>{position.qty}</td>
                      <td>{Number(position.avg).toFixed(2)}</td>
                      <td>{Number(position.price).toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - position.avg * position.qty).toFixed(2)}
                      </td>
                      <td className={dayClass}>{position.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
           </div>
        </>
    )
}

export default Positions;