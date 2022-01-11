import axios from 'axios'
import {PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} from '../config.js';

export const createOrder = async (req, res) => {
    const order = {
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'USD',
                    value: '105.70'
                },
                description: "teclado de computadora",
            }
        ],
        application_context: {
            brand_name: "mycompany.com",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: 'http://localhost:4000/capture-order',
            cancel_url: 'http://localhost:4000/cancel-order'
        }
    }

    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET
        }
    })

    console.log(response.data)
}

export const captureOrder = (req, res) => {
    res.send('capturing an order')
}

export const cancelOrder = (req, res) => {
    res.send('cancel an order')
}