import React from 'react';
import Link from 'next/link';

const Cart: React.FC = () => {
  return (
    <main>
      <div className='container pt-20 lg:pt-0 px-32'><br/><br/><br/><br/><br/>
        <h1 className="text-center text-4xl font-bold pt-4">Your cart</h1><br/>
        <p className="text-center text-xl mb-4">Your cart is currently empty.</p>
        <div className="text-center">
          <Link href="/collections/shop" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
              CONTINUE SHOPPING
            </a>
          </Link>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
    </main>
  );
};

export default Cart;
