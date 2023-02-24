import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(`pk_test_51L9mvXBpDbTwcZJxsuTEJxQkyWd5yXW1djvlmrzos8Zp45iKKJdv0zmPGQ10VtuTc8BM4UpV8xYg1jOqmFe77jQt00qe01l2XM`);
    }
    return stripePromise;
}

export default getStripe;