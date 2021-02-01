const axios = require('axios')
axios.defaults.headers.common = {'Authorization': `Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ`}

const getRates = (params) => {

    const fetchSellers = async (params) => {
       try {
           const response = await axios.get('https://mvmapi.webkul.com/api/v2/sellers.json')
       } catch(err) {}
    }

    return {
        rates: [
            {
                'service_name': 'Standard delivery',
                'description': 'description',
                'service_code': 'standard_delivery',
                'total_price': '5000',
                'currency': 'PHP',
                'min_delivery_date': '2013-04-12 14:48:45 -0400',
                'max_delivery_date': '2013-04-12 14:48:45 -0400'
            },
            {
                'service_name': 'Express delivery',
                'description': 'description',
                'service_code': 'express_delivery',
                'total_price': '8000',
                'currency': 'PHP',
                'min_delivery_date': '2013-04-12 14:48:45 -0400',
                'max_delivery_date': '2013-04-12 14:48:45 -0400'
            }
        ]
    }

}