import React from 'react';

const Contact: React.FC = () => {
  return (
    <main>
      <div className='container pt-20 lg:pt-0 color-white pl-32 pr-32'>
        <h1 className="text-center text-4xl font-bold mb-8 pt-14">Contact</h1><br/>
        <p>Do you have questions, concerns or suggestions regarding our products or services? We are here to help you!</p><br/>
        <p>Our customer service is available to you all year round, Monday to Friday, from 9 a.m. to 12 p.m. and from 2 p.m. to 7 p.m. (Central European Time). We do our best to answer your questions as soon as possible. During our opening hours, you will receive a response in less than 30 minutes.</p><br/>
        <p>You can contact us by e-mail at <b><a href='mailto:contact@corten.plus'>contact@corten.plus</a></b> or via the form below.</p><br/>
        <p>Don't forget to subscribe to our newsletter to receive the latest updates on our products, special promotions and exclusive events. Also follow us on social networks to be aware of all the news of our online store.</p><br/>
        <p>We appreciate your interest in our online store and look forward to providing you with a pleasant and satisfying shopping experience.</p><br/>

        <form className="contact-form">
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" required></textarea>
          </div>
          <div className="mb-4">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-black shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              SEND
            </button>
          </div>
        </form>
      </div>
      <br/><br/>
    </main>
  );
};

export default Contact;
