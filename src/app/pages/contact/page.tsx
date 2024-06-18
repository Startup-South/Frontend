// app/contact/page.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <main>
    <div className='container pt-20 lg:pt-0 color-white'>
      <h1 className="text-center text-4xl font-bold mb-8 pt-14">Contact</h1><br/>
      <p>Do you have questions, concerns or suggestions regarding our products or services? We are here to help you !</p><br/>
      <p>Our customer service is available to you all year round, Monday to Friday, from 9 a.m. to 12 p.m. and from 2 p.m. to 7 p.m. (Central European Time). We do our best to answer your questions as soon as possible. During our opening hours, you will receive a response in less than 30 minutes.</p><br/>
      <p>You can contact us by e-mail at <b><a href='/'>contact@corten.plus</a></b> or via the form below.</p><br/>
      <p>Don't forget to subscribe to our newsletter to receive the latest updates on our products, special promotions and exclusive events. Also follow us on social networks to be aware of all the news of our online store.</p><br/>
      <p>We appreciate your interest in our online store and look forward to providing you with a pleasant and satisfying shopping experience.</p><br/><br/><br/>
      {/* Ajoutez ici vos composants ou contenu spécifiques pour la page Contact */}
      </div>
    </main>
  );
};

export default Contact;
