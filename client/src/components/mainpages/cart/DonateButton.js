import React from 'react';
// import PaypalExpressBtn from 'react-paypal-express-checkout';
import StripeCheckout from 'react-stripe-checkout'
 
export default class DonateButton extends React.Component {
    render() {
        const onSuccess = (payment) => {
            		console.log("The payment was succeeded!", payment);
                    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                    this.props.tranSuccess(payment)
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for prod
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'YOUR-sandbox-APP-ID',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get prod's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For prodcytion app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        let style = {
            size: 'small',
            color: 'blue',
            shape: 'rect',
            label: 'checkout',
            tagline: false
        }

        return (
            <StripeCheckout 
            env={env} client={client} 
            currency={currency} 
            total={total} onError={onError} 
            onSuccess={onSuccess} onCancel={onCancel}
            style={style}
            stripeKey='pk_test_51McFcDD7yKPgI5WMU43O629G8qTASLpaWAXkAtD4B2JfukQjTInuHdTX7l1nUtULCd1RoLnjySmurjcbD6NXpbBX00Gpg5ggtr' />
        );
    }
}