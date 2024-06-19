// app/faqs/page.tsx
import React from 'react';

const Faqs: React.FC = () => {
  return (
    <main>
     <div className='container pt-20 lg:pt-0 color-white'>
      <h1 className="text-center text-4xl font-bold mb-8 pt-14">Faqs</h1><br/>
      <p><strong>1. How can I contact your customer service? </strong> Our customer service is available all year round, from Monday to Friday, from 9 a.m. to 12 p.m. and from 2 p.m. to 7 p.m. (Central European Time). You can contact us by email at <b> <a href='/'>contact@corten.plus </a></b> or use the contact form on our website.</p><br />
      <p> <strong>2. How can I track my order? </strong>After the shipment of your order, you will receive a shipping confirmation email. In this email, you will find your tracking number to locate your order.</p><br/>
      <p> <strong>3. What are the response times of the customer service?</strong>We strive to respond to your questions as quickly as possible. During our business hours, you will receive a response within 30 minutes.</p><br/>
      <p> <strong>4. Do you offer special promotions?</strong> Yes, we regularly offer special promotions on our products. Make sure to subscribe to our newsletter to receive the latest updates on our exclusive offers.</p><br /> 
      <p> <strong>5. Where can I find news and events about your online store?  </strong>To stay updated on news, promotions, and exclusive events, follow us on our social media. You will find all the important information about our online store.</p><br /> 
      <p> <strong>6. What payment options are available? </strong>We accept several secure payment methods, including credit cards and bank transfers. During the payment process, you can choose the option that suits you best.</p><br /> 
      <p> <strong>7. Do you deliver internationally?  </strong>Yes, we offer delivery to all countries worldwide. After selecting your items and choosing your shipping address, the delivery methods and rates will be displayed automatically before payment.</p><br /> 
      <p> <strong>8. Do you offer returns or refunds?  </strong>We want you to be fully satisfied with your purchases. If you encounter an issue with a product, please contact our customer service as soon as possible to discuss return or refund options.</p><br /> 
      <p> <strong>9. Can I cancel or modify my order after placing it? </strong>We process orders quickly to ensure fast delivery. If you need to cancel or modify your order, please contact us as soon as possible. We will do our best to assist you, but it will depend on the order status.</p><br /> 
      <p> <strong>10. Why is my tracking number not working?  </strong>Sometimes, your tracking number may take a few days to become active. Please try again later, but if the issue persists, contact us.</p><br /> 
      <p> <strong>11. How can I get an invoice for my order?  </strong>The invoice for your order is always sent with your package. If you have lost it, you can also send us an email to receive a copy.</p><br /> 
      <p> <strong>12. I can't find my question in the list, what should I do? </strong>Send us an email to <b><a href='/'>contact@corten.plus</a></b>, and we will respond as soon as possible.</p><br /> <br /><br />
      </div>


      {/* Ajoutez ici vos composants ou contenu spécifiques pour la page faqs */}
    </main>
  );
};

export default Faqs;
