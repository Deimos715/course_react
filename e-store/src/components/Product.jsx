const productData = [
    {
        name: "Laptop Pro",
        description: "High-performance laptop for professionals.",
        price: 1200,
        photoName: "/laptop.png",
        soldOut: false,
    },
    {
        name: "Smartphone X",
        description: "Latest model with stunning display.",
        price: 800,
        photoName: "/smartphone.png",
        soldOut: false,
    },
    {
        name: "Wireless Headphones",
        description: "Noise-cancelling headphones with great sound quality.",
        price: 200,
        photoName: "/headphones.png",
        soldOut: false,
    },
    {
        name: "Smartwatch Z",
        description: "Stylish smartwatch with fitness tracking features.",
        price: 150,
        photoName: "/smartwatch.png",
        soldOut: false,
    },
    {
        name: "Gaming Console",
        description: "Powerful gaming console for endless fun.",
        price: 400,
        photoName: "/console.png",
        soldOut: true,
    },
    {
        name: "4K TV",
        description: "Ultra HD television with vibrant colors.",
        price: 1000,
        photoName: "/tv.png",
        soldOut: false,
    },
];

const Product = () => {
    return (
        <li className="product">
            <img src={productData[1].photoName} alt={productData.name} />
            <div>
                <h3>{productData[1].name}</h3>
                <p>{productData[1].description}</p>
                <span>${productData[1].price}</span>
            </div>
        </li>
    );
};

export default Product;
