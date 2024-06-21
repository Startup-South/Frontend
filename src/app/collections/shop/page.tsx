import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <main>
      <div className="container text-center pt-20 lg:pt-0 px-32">
        <br /><br /><br /><br /><br />
        <h1 className="text-center text-4xl font-bold pt-4">404 Page Not Found</h1><br />
        <p className="text-center text-xl mb-4">The page you requested does not exist.</p>
        <div className="text-center">
          <Link href="/" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
              CONTINUE SHOPPING
            </a>
          </Link>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </main>
  );
};

export default Custom404;
