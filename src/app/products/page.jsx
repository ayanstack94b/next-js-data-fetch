import Product from "@/Components/Product";

const getProducts = async()=>{
    const res = await fetch('http://localhost:5000/products',{cache: 'force-cache'})
    return res.json()
}

const ProductsPage = async() => {
    const products = await getProducts()
    return (
        <div>
            <h2 className="text-center font-semibold text-orange-500 text-xl my-10">Products here is: {products.length}</h2>
            <div className="container mx-auto grid grid-cols-3 gap-5 p-5 ">
                {
                    products.map((product)=> <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;