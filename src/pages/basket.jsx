import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const Basket = ({ sepetData }) => {
  console.log("sepetData", sepetData);
  return (
      <center><Card
      hoverable
      style={{
       width: 240,
      }}
     cover={<img alt="example" src="macbook.jpg" />}
      >
      <Meta title="Apple MacBook Pro 13" description="www.apple.com" /> 
      </Card></center>
  );
};

export default Basket;
