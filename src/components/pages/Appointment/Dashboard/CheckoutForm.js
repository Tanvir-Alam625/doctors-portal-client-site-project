import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center tex-2xl text-primary font-semibold lg:mb-10 mb-6">
        Please Enter the Card Information and Parches Now
      </h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-primary text-base-100 w-full my-6 "
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
