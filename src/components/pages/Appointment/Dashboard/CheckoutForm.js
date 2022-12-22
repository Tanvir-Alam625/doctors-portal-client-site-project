import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [btnSpinner, setBtnSpinner]=useState(false);
  const navigate = useNavigate();
  const { _id, treatment, patientEmail, patientName, date, slot, price } =
    appointment;
    // =======================
    // onload payment info 
    // ===========================
  useEffect(() => {
    fetch("https://doctors-portal-server-project-tanvir.onrender.com/create-payment-intent", {
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
    // =======================
    // success modal function  
    // =======================
  const showSwalWithLink = ({title,text, icon, btn}) => {
    MySwal.fire({
      title,
      text,
      icon,
      confirmButtonText:btn,
    })
  };
  //==========================
  //  start the payment form function 
  //=========================
  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnSpinner(true);
    //============================
    // card & elements validation 
    //============================
    if (!stripe || !elements) {
      setBtnSpinner(false);
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      setBtnSpinner(false);
      return;
    }
    //============================
    // create payment  
    //============================
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    //============================
    // create payment  error
    //============================
    if(error){
      setBtnSpinner(false);
      setErrorMessage(error.message);
    }
    //============================
    // create payment  intent
    //============================
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
    //============================
    // intent error message 
    //============================
    if (intentError) {
      setBtnSpinner(false);
      setErrorMessage(intentError?.message);
    } else {
    //============================
    // payment success 
    //============================
    //============================
    // stored BDS payment data 
    //============================
      const paymentData = {
        transactionId: paymentIntent.id,
        date: date,
        patientEmail: patientEmail,
        patientName: patientName,
        price: price,
        treatment: treatment,
      };
    //============================
    // fetching booking data form DBS 
    //============================
      fetch(`https://doctors-portal-server-project-tanvir.onrender.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate('/dashboard');
          showSwalWithLink({
            title: 'Payment Success',
            text: `Your Transaction Id ${paymentIntent.id}`,
            icon: 'success',
            btn: 'Close'
          });
          setBtnSpinner(false);

        });
    }
  };
  //==========================
  //  end the payment form function 
  //=========================
  return (
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
            disabled={!stripe || !clientSecret || btnSpinner}
          >
            {btnSpinner ? 'Loading...':'Pay'}
          </button>
        </form>
  );
};

export default CheckoutForm;
