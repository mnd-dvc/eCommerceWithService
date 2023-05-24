import React, { useEffect, useState } from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { Button, Card, List } from "antd";
import axios from "axios";
import { Rate } from "antd";
import { Tooltip } from "antd";
import { Link, NavLink } from "react-router-dom";

const { Meta } = Card;

const ProductList = ({ change, sepett }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    }).then((res) => {
      setData(res.data.products);
      change(res.data.products);
    });
  }, []);

  //console.log("data", data);

  const [sepet, setSepet] = useState([]);
  const sepetEkle = (index) => {
    const newDeger = data.filter((e, i) => i === index);
    setSepet([...sepet, ...newDeger]);
    //console.log(sepet.length);
  };

  sepett(sepet);

  // console.log("sepet", sepet);

  return (
    <div style={{ justifyContent: "center" }}>
      <div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          itemLayout="horizontal"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
            align: "center",
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                key={item.id}
                hoverable
                style={{ width: 340, margin: "16px", padding: "20px" }}
                actions={[
                  <Tooltip title="FAVORİLERE EKLE">
                    <HeartOutlined key="like" style={{ fontSize: "20px" }} />
                  </Tooltip>,

                  <Tooltip title="SEPETE EKLE">
                    <ShoppingCartOutlined
                      onClick={() => sepetEkle(index)}
                      key="shop"
                      style={{ fontSize: "20px" }}
                    />
                  </Tooltip>,

                  <Tooltip title="SİL">
                    <DeleteOutlined key="delete" style={{ fontSize: "20px" }} />
                  </Tooltip>,
                ]}
                cover={<img alt={item.title} src="macbook.jpg" />}
              >
                <Link to={`/products/${item.id}`}>
                  <Button> ürüne git </Button>
                </Link>
                <Meta title={item.title} description={item.description} />
                <Rate allowHalf defaultValue={item.rating} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ProductList;
