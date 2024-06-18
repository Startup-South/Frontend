// app/return-policy/page.tsx
import React from 'react';

const ReturnPolicy: React.FC = () => {
  return (
    <main>
    <div className='container pt-20 lg:pt-0 color-white'><br/>
      <h1 className="text-center text-4xl font-bold mb-8 pt-6">Return policy</h1><br/>
      <p><b>Action Required to Initiate a Return</b></p><br/>
      <p>In order to start the return process, you must first download our form at the following link: Download</p><br/>
      <p>On this form, it is necessary to fill in all the information:</p><br/>
      <ul>
         <li> Order Date</li>
         <li>Order Number</li>
         <li>Total Order Amount</li>
         <li>Items concerned by the request</li>
         <li>If you want an exchange or a refund</li>
         <li>Name</li>
         <li>Street</li>
         <li>Postal Code</li>
         <li>City</li>
         <li>Country</li>
         <li>Email Address</li>
         <li>Phone Number</li>
         <li>Date and Signature</li> 
      </ul><br/>
      <p>You must send this form to the email address contact@corten.plus or by registered mail to the following address:</p><br/>
      <p>Corten+ LLC<br/>
        192 Bear Christiana Rd #2123<br/>
        Bear, DE 19701<br/>
        United States</p><br/>
      <p>Once the form is received, our customer service will send you a return coupon to be included with your order and you will need to return your order to us at your own expense by postal mail only, to the following address:</p><br/>
      <p>Corten+ LLC<br/>
         192 Bear Christiana Rd #2123<br/>
         Bear, DE 19701<br/>
         United States</p><br/>
      <p>Once your order is received at our warehouse, we will inspect your package to verify if the order has been returned in full and in good condition.</p><br/>
      <p><b>Refund</b></p><br/>
      <p>If you choose to request a refund rather than a replacement of the item, you will be refunded within 2 days. The refund will be made by the same payment method you used at the time of purchase. No restocking fees are applied for returns.</p><br/>
      <p><b>Exchange</b></p><br/>
      <p>If you choose to request an exchange, meaning a replacement of the item, we will send you a new item free of charge.</p><br/>
      <p><b>Conditions for Returns</b></p><br/>
      <p>To make a return, it is imperative to start the return process within 30 days from the delivery of your item. This means we must receive the return request form within 30 days from the delivery date.</p><br/>
      <p>It is also imperative that the item is in new or lightly used condition, however, you can return the item whether it is defective or not.</p><br/>
      <p>You can make a return without any reason, and you can also make a return from any country worldwide.</p><br/><br/>
      {/* Ajoutez ici vos composants ou contenu spécifiques pour la page return policy */}
      </div>
    </main>
  );
};

export default ReturnPolicy;
