import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I4tulJWtCUaN7I8a0yxikvdgC8smGWhySMIlBenlPrE4HgtdCZIGf6PmQvVpSiWxqPQyClxk7jraZUJZm4Wv8Xk00vTpNjZwr'
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
    //you would pass this to you backend wish wiuld create the charge
  }
  return(
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton