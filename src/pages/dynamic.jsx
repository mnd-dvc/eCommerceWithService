import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dynamic() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://dummyjson.com/products/${id}`,
    }).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      <div key={data.id}>
        <p>{data.title}</p>
        <p>{data.category}</p>
        <p>{data.price + " " + "TL"}</p>
      </div>
    </div>
  );
}

export default Dynamic;
