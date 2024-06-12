import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
    {
    img:'/degreaser.png',
    title:'Degreaser',
    desc:'',
    rating: 5,
    price: '9.90',
},
{
    img:'/descaler.png',
    title:'Descaler',
    desc:'',
    rating: 4,
    price: '39.90',
},
{
    img:'/rustaccelerator_sp.png',
    title:'Rust accelerator',
    desc:'',
    rating: 5,
    price: '29.90',
},
{
    img:'/AntiquingFluid.png',
    title:'Antiquing Fluid',
    desc:'',
    rating: 4,
    price: '29.90',
},
{
    img:'/Sealer_1L.png',
    title:'Sealer',
    desc:'',
    rating: 5,
    price: '34.90',
},
];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='text-center font-medium text-2xl pb-4'>FEATURED PRODUCTS
        </h2> <br /><br />
        <div className='grid grid-cols-1 text-center place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            {productsData.map((item, index) => (
                <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />
            ))}
        </div>

        </div>
    </div>
  )
}

export default NewProducts
