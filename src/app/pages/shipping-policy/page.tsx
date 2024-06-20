// app/shipping-policy/page.tsx
import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <main>
       <div className='container pt-20 lg:pt-0 color-white pl-32 pr-32'>
      <h1 className="text-center text-4xl font-bold mb-8 pt-14">Shipping policy</h1><br/>
      <p><b>Article 1. General Information</b></p><br/>
      <p>This page presents the costs and delivery times associated with shipping a package. The various delivery options are offered when placing an order. They vary based on the type of product, the delivery address and the dimensions of the product. To be delivered on time, your card must first be debited, as we only ship products once the payment has been confirmed.</p><br/>
      <p><b>Article 2. Country of destination</b></p><br/>
      <p>With several shipping platforms, including one in Europe, one in America, one in Asia and one in Oceania, we can offer deliveries around the world, including the most remote islands and areas. Delivery times never exceed 5 days, no matter where you want the item delivered, and you can always opt for a 24-hour delivery.</p><br/>
      <p><b>Article 3. Standard delivery</b></p><br/>
      <p>Standard delivery usually takes 2-4 business days to reach the recipient. A signature is always required upon delivery of the parcel. It is important to provide a phone number when placing the order, since we pass this on to the carrier who will use it if there is any trouble locating your address. Parcels are never delivered to your mailbox unless you have provided the carriers with a waiver prior to delivery.</p><br/>
      <p><b>Article 4. Express delivery</b></p><br/>
      <p>With express delivery, we deliver the parcel to you within 24 hours. Thanks to our transport contract, if you receive the parcel any later, the carrier will reimburse the delivery costs. The order must be paid by PayPal or credit card. If you choose to pay by bank transfer, we will not send your order until we have received the funds.</p><br/>
      <p><b>Article 5. Delivery costs </b></p><br/>
      <p>Delivery costs are calculated automatically during checkout based on the weight, dimensions and your country of delivery. To determine what they are, please add the desired products to the basket and then proceed to checkout to see the delivery costs.</p><br/>
      <p><b>Article 6. Delivery times </b></p><br/>
      <p>Delivery times are also displayed during checkout. They depend on the selected delivery option, as well as the country of delivery. In any case, regardless of the country of delivery, it is always possible for deliveries to be made within 24 hours.</p><br/>
      <p><b>Article 7. Parcel collection times </b></p><br/>
      <p>Carriers collect parcels from our warehouses Monday through Friday. For standard deliveries, carriers pick up parcels at 11:00am. For express deliveries, carriers pick up parcels at 1:00pm. Any orders placed after these cut-off times will be given to carriers the following day.</p><br/>
      <p><b>Article 8. Tracking parcels</b></p><br/>
      <p>Within no more than 12 hours after placing an order, you will receive an e-mail and an SMS notifying you that your parcel has been shipped. We will provide you with a tracking number so that you can track your parcel in real time.</p><br/><br/>
      
      {/* Ajoutez ici vos composants ou contenu spécifiques pour la page Shipping policy */}
      </div>
    </main>
  );
};

export default ShippingPolicy;
