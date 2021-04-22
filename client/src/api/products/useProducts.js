import faker from "faker";

const generateProduct = (index) => ({
  code: faker.finance.creditCardNumber(),
  imageUrl: `${faker.image.imageUrl(140, 300, "abstract")}?random=${index}`,
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  material: faker.commerce.productMaterial(),
  price: faker.commerce.price(),
});

export default function useProducts() {
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push(generateProduct(i));
  }

  return data;
}
