// app/payment-method/page.tsx
import React from 'react';

const PaymentMethod: React.FC = () => {
  return (
    <main>
       <div className='container pt-20 lg:pt-0 color-white pl-32 pr-32'><br/>
      <h1 className="text-center text-4xl font-bold mb-8 pt-6">Payment method</h1><br/>
      <p><b>Article 1. General</b></p><br/>
      <p>We offer various different payment methods to validate an order. Depending on the order amount, chosen delivery method, or delivery address, certain payment methods will be available. Below, you'll find the details of the commonly accepted payment methods.</p><br/>
      <p><b>Article 2. Bank card</b></p><br/>
      <p>For all your credit card payments, the transaction is secured using SSL encryption technology. In fact, all your payment-related information is encrypted from your computer to the bank's server. Computer processing, with an encoded key, allows the use of banking information. All this information remains confidential and cannot be viewed or used without your knowledge. This payment method allows for quick order processing. We accept all cards, including Visa, Mastercard, Carte Bleue, Maestro, Visa Electron, American Express, Discover, Diners Club, China UnionPay, and JCB.</p><br/>
      <p><b>Article 3. PayPal</b></p><br/>
      <p>If you have a PayPal account and a linked credit card, you can use this payment method for your order, provided that all items in your cart are in stock. After completing the PayPal payment, please remember to confirm your order (follow PayPal's instructions during payment). The deduction will be made via PayPal up on confirmation of the order on our website. Please note that, except for a new order, never send a PayPal payment directly.</p><br/>
      <p><b>Article 4. Bank Check</b></p><br/>
      <p>Once your order is validated, our teams will contact you to provide payment details. Please include the order number on the back of the check. This number is also mentioned in the order confirmation email you received. You can also write your order number on plain paper or attach a copy of the order confirmation email to your letter. For any order over €2000 paid by check, a cashier's check may be requested. We will advise you to contact your bank to obtain this cashier's check. Please note that the preparation of your order and the reservation of your items will only occur upon receipt of payment.</p><br/>
      <p><b>Article 5. Bank Transfer</b></p><br/>
      <p>We accept payment by bank transfer for all orders. Once we validate the receipt of the transfer by our services, the order can be confirmed. Please note that the items are not reserved until we actually validate the payment. If you wish to receive your order as quickly as possible, we recommend payment by credit card. To receive our bank details, please request them via email. It's important to specify your order number in the payment reference.</p><br/><br/>
      {/* Ajoutez ici vos composants ou contenu spécifiques pour la page payment method */}
      </div>
    </main>
  );
};

export default PaymentMethod;
