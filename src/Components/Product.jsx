import React from 'react';

const Product = ({product}) => {
    const {
        id,
        name,
        brand,
        category,
        price,
        stock,
        rating,
        image,
        description
    } = product;
    return (
        <div className="card container mx-auto bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-400'>{description}</p>
                <p className='text-green-500 font-semibold'>Price: ${price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;