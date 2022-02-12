import { useState, useEffect } from "react";
import Axios from "axios";
import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "563492ad6f9170000100000150898b2f55564ea3807ca1803b76218d";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "http://myjson.dit.upm.es/api/bins/er7d";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  // const fetchPhotos = async () => {
  //   const { data } = await Axios.get(url, {
  //     header: {
  //       Authorization: apiKey,
  //     },
  //   });
  //   const { photos } = data;

  //   const allProduct = photos.map((photo) => ({
  //     smallImage: photo.src.medium,
  //     tinyImage: photo.src.tiny,
  //     productName: faker.random.word(),
  //     productPrice: faker.commerce.price(),
  //     id: faker.datatype.uuid(),
  //   }));

  //   setProduct(allProduct);
  // };

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl);
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
