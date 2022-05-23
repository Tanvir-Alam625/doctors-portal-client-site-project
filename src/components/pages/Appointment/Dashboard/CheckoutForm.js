import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [success, setSuccess] = useState(false);
  const { _id, treatment, patientEmail, patientName, date, slot, price } =
    appointment;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.clientSecret) {
          setClientSecret(result.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setErrorMessage(error ? error.message : " ");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });
    if (intentError) {
      setErrorMessage(intentError?.message);
    } else {
      setSuccess(true);
      setTransactionId(paymentIntent.id);
      // stored BDS payment data
      const paymentData = {
        transactionId: paymentIntent.id,
        date: date,
        patientEmail: patientEmail,
        patientName: patientName,
        price: price,
        treatment: treatment,
      };
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully Payment.");
          console.log(data);
        });
    }
  };
  return (
    <>
      {success ? (
        <div className="p-6 ">
          <h2 className="text-4xl text-green-500 font-semibold text-center my-6">
            Success
          </h2>
          <p className="text-green-300 my-4 text-center">
            Congrats! Your Payment is Complete
          </p>
          <p className="text-center">
            Your Transaction Id:{" "}
            <span className="text-primary">{transactionId}</span>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-center tex-2xl text-primary font-semibold lg:mb-10 mb-6">
            Please Enter the Card Information and Pay Now
          </h2>
          <CardElement
            className="border-b p-4 rounded-lg"
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
          {<p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="btn btn-primary text-base-100 w-full my-6 "
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutForm;
