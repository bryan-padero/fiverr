import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Orders.scss";

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
       newRequest
      .get(`/orders`)
      .then((res) => {
        return res.data
      })
  })

  console.log(data);

  return (
    <div className="orders">
      { isLoading ? "Loading..." : error ? "Something went wrong!" : (
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Seller ID</th>
            <th>Contact</th>
          </tr>
          { data.map(order => (
            <tr key={order._id}>
            <td>
              <img
                className="image"
                src={order.img}
                alt=""
              />
            </td>
            <td>{order.title}</td>
            <td>{order.price}</td>
            <td>{order.sellerId}</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          ))}
        </table>
      </div>)}
    </div>
  );
};

export default Orders;
