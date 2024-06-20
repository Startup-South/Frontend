// app/my-account/page.tsx
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <main>
    <div className='container pt-20 lg:pt-0 color-white pl-32 pr-32'><br/>
      <h1 className="text-center text-4xl font-bold mb-8 pt-6">Refund policy</h1><br/>
      <p><b>Action required to request a refund</b></p><br/>
      <p>In order to start the refund process, you must first download our form at the following link :<a href='/'>Download</a></p><br/>
      <p>On this form, it is necessary to fill in all the information :</p><br/>
      <ul>
         <li>Order Date</li>
         <li>Order number</li>
         <li>Total order amount</li>
         <li>Items concerned by the request</li>
         <li>Name</li>
         <li>Street</li>
         <li>Postal code</li>
         <li>City</li>
         <li>Country</li>
         <li>Email address</li>
         <li>Phone number</li>
         <li>Date and signature</li> 
      </ul><br/>
      <p>You must send this form to the email address <a href='mailto:contact@corten.plus'><b>contact@corten.plus</b></a> or by registered mail to the following address :</p><br/>
      <p>Corten+ LLC<br/>
         192 Bear Christiana Rd #2123<br/>
         Bear, DE 19701<br/>
         United States</p><br/>
      <p><b>Refund </b></p><br/>
      <p>The refund will be processed within 2 days and will be made to the same payment method you used at the time of purchase.</p><br/>
      <p><b>Refund conditions</b></p><br/>
      <p>If the item is covered by a results guarantee, you can request a refund for this item if it did not work for you.</p><br/>
      <p>If the item was missing, damaged, broken, or defective upon delivery, you can also request a refund for the item.</p><br/>
      <p>If your order was not delivered within 30 days, you can also request a refund for the item.</p><br/><br/>
      {/* Ajoutez ici vos composants ou contenu spécifiques pour la page refund policy */}
      </div>
    </main>
  );
};

export default RefundPolicy;
