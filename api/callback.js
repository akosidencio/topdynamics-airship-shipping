const Router = require('koa-router')
const koaBody = require('koa-body')
const router = new Router()
const axios = require('axios')
const provinces = require('./provinces.js')
// sender ids
const sellersIds = {
    'topdynamics': {
        'airagraceatabay@gmail.com': 5346,
        'isabelamay.villa@gmail.com': 5347,
        'keishasegui@gmail.com': 5348,
        'dannyolaguer@yahoo.com': 5351,
        'maricor.sotto.16.ms@gmail.com': 5352,
        'emelypineda215@gmail.com': 5353,
        'alyssa.marielle16@gmail.com': 5354,
        'jersheydizon8@gmail.com': 5355,
        'gregorioangelica653@gmail.com': 5356,
        'cejygorgonio07@gmail.com': 5357,
        'shinhill07@gmail.com': 5358,
        'tpauline12@yahoo.com': 5359,
        'junebviray@yahoo.com': 5360,
        'nerisscinco@yahoo.com': 5361,
        'miletaquino@gmail.com': 5362,
        'gwenlibrodo@yahoo.com': 5363,
        'a.endrenal@gmail.com': 5364,
        'shekinahsummer@gmail.com': 5365,
        'chlsgdrnb@gmail.com': 5366,
        'waynebcastillo@hotmail.com': 5367,
        'jairrayap14@gmail.com': 5368,
        'joannasingson00@gmail.com': 5369,
        'mkzamoraa@gmail.com': 5370,
        'maraaadg@gmail.com': 5371,
        'kimberlycabugao26@gmail.com': 5372,
        'estrada.josefina@gmail.com': 5373,
        'kachina098@gmail.com': 5374,
        'chitoaguro@gmail.com': 5406,
        'avcelestinea@gmail.com': 5407,
        'diazsarahjeane9@gmail.com': 5408,
        'tinlaceda@yahoo.com': 5409,
        'meaghan.reyess@gmail.com': 5410,
        'jesdecastro94@gmail.com': 5411,
        'lutherauthor@gmail.com': 5412,
        'diolapogi@gmail.com': 5417,
        'anmaje.calvan@gmail.com': 5418,
        'balaneannshazny@gmail.com': 5419,
        'josefelcastillo@gmail.com': 5420,
        'alextramae@gmail.com': 5422,
        'eveaguila.medbilling@gmail.com': 5423,
        'paisley.retail@gmail.com': 5424,
        'scarletmedos@gmail.com': 5425,
        'keykbianca@gmail.com': 5426,
        'rosenda.m.orbillo@gmail.com': 5428,
        'aubreymendoza0106@gmail.com': 5429,
        'gelabau03@gmail.com': 5430,
        'peredowilson8888@gmail.com': 5431,
        'yashreinpaula@gmail.com': 5432,
        'alyssatueres@gmail.com': 5435,
        'luisamaula@gmail.com': 5436,
        'ganalgianna@gmail.com': 5437,
        'estrada.josefina@gmail.com': 5438,
        'jasmintan.books@gmail.com': 5439,
        'airagraceatabay@gmail.com': 5441,
        'isabelamay.villa@gmail.com': 5442,
        'dannyolaguer@yahoo.com': 5443,
        'maricor.sotto.16.ms@gmail.com': 5444,
        'alyssa.marielle16@gmail.com': 5445,
        'jersheydizon8@gmail.com': 5446,
        'shinhill07@gmail.com': 5447,
        'tpauline12@yahoo.com': 5449,
        'miletaquino@gmail.com': 5450,
        'gwenlibrodo@yahoo.com': 5451,
        'acalajessa91@gmail.com': 5804,
        'sia.vochelle@gmail.com': 5954,
        'olivareslehi@gmail.com': 5955,
        'aehsypeino6@gmail.com': 5957,
        'andrew.bernardo66@yahoo.com': 5958,
        'cheapobooksonline@gmail.com': 5959,
        'minerva.bacsal@gmail.com': 5960,
        'margie.a.deleon@gmail.com': 5961,
        'deanalegre23@gmail.com': 5962,
        'junebviray@yahoo.com': 5963
    },
}
// Api keys
const topDynamicsKeys = {
    secretKey: '70e72ad8-bf08-445d-a3db-b73e7781f7b3',
    apiKey: '52f24a29-44e8-41b5-8569-59491ccd6c69'
}
// Couriers
const topDynamics = [
    {
        "id": 1401,
        "name": "Abra"
    },
    {
        "id": 1602,
        "name": "Agusan Del Norte"
    },
    {
        "id": 1603,
        "name": "Agusan Del Sur"
    },
    {
        "id": 604,
        "name": "Aklan"
    },
    {
        "id": 505,
        "name": "Albay"
    },
    {
        "id": 606,
        "name": "Antique"
    },
    {
        "id": 1481,
        "name": "Apayao"
    },
    {
        "id": 377,
        "name": "Aurora"
    },
    {
        "id": 1507,
        "name": "Basilan"
    },
    {
        "id": 308,
        "name": "Bataan"
    },
    {
        "id": 209,
        "name": "Batanes"
    },
    {
        "id": 410,
        "name": "Batangas"
    },
    {
        "id": 1411,
        "name": "Benguet"
    },
    {
        "id": 878,
        "name": "Biliran"
    },
    {
        "id": 712,
        "name": "Bohol"
    },
    {
        "id": 1013,
        "name": "Bukidnon"
    },
    {
        "id": 314,
        "name": "Bulacan"
    },
    {
        "id": 215,
        "name": "Cagayan"
    },
    {
        "id": 516,
        "name": "Camarines Norte"
    },
    {
        "id": 517,
        "name": "Camarines Sur"
    },
    {
        "id": 1018,
        "name": "Camiguin"
    },
    {
        "id": 619,
        "name": "Capiz"
    },
    {
        "id": 520,
        "name": "Catanduanes"
    },
    {
        "id": 421,
        "name": "Cavite"
    },
    {
        "id": 722,
        "name": "Cebu"
    },
    {
        "id": 1182,
        "name": "Compostela Valley"
    },
    {
        "id": 1247,
        "name": "Cotabato"
    },
    {
        "id": 1298,
        "name": "Cotabato City"
    },
    {
        "id": 1123,
        "name": "Davao Del Norte"
    },
    {
        "id": 1124,
        "name": "Davao Del Sur"
    },
    {
        "id": 1186,
        "name": "Davao Occidental"
    },
    {
        "id": 1125,
        "name": "Davao Oriental"
    },
    {
        "id": 1685,
        "name": "Dinagat Islands"
    },
    {
        "id": 826,
        "name": "Eastern Samar"
    },
    {
        "id": 679,
        "name": "Guimaras"
    },
    {
        "id": 1427,
        "name": "Ifugao"
    },
    {
        "id": 128,
        "name": "Ilocos Norte"
    },
    {
        "id": 129,
        "name": "Ilocos Sur"
    },
    {
        "id": 630,
        "name": "Iloilo"
    },
    {
        "id": 231,
        "name": "Isabela"
    },
    {
        "id": 1432,
        "name": "Kalinga"
    },
    {
        "id": 133,
        "name": "La Union"
    },
    {
        "id": 434,
        "name": "Laguna"
    },
    {
        "id": 1035,
        "name": "Lanao Del Norte"
    },
    {
        "id": 1536,
        "name": "Lanao Del Sur"
    },
    {
        "id": 837,
        "name": "Leyte"
    },
    {
        "id": 1538,
        "name": "Maguindanao"
    },
    {
        "id": 1740,
        "name": "Marinduque"
    },
    {
        "id": 541,
        "name": "Masbate"
    },
    {
        "id": 1339,
        "name": "Metro Manila"
    },
    {
        "id": 1042,
        "name": "Misamis Occidental"
    },
    {
        "id": 1043,
        "name": "Misamis Oriental"
    },
    {
        "id": 1444,
        "name": "Mountain Province"
    },
    {
        "id": 645,
        "name": "Negros Occidental"
    },
    {
        "id": 746,
        "name": "Negros Oriental"
    },
    {
        "id": 848,
        "name": "Northern Samar"
    },
    {
        "id": 349,
        "name": "Nueva Ecija"
    },
    {
        "id": 250,
        "name": "Nueva Vizcaya"
    },
    {
        "id": 1751,
        "name": "Occidental Mindoro"
    },
    {
        "id": 1752,
        "name": "Oriental Mindoro"
    },
    {
        "id": 1753,
        "name": "Palawan"
    },
    {
        "id": 354,
        "name": "Pampanga"
    },
    {
        "id": 155,
        "name": "Pangasinan"
    },
    {
        "id": 456,
        "name": "Quezon"
    },
    {
        "id": 257,
        "name": "Quirino"
    },
    {
        "id": 458,
        "name": "Rizal"
    },
    {
        "id": 1759,
        "name": "Romblon"
    },
    {
        "id": 1280,
        "name": "Sarangani"
    },
    {
        "id": 761,
        "name": "Siquijor"
    },
    {
        "id": 562,
        "name": "Sorsogon"
    },
    {
        "id": 1263,
        "name": "South Cotabato"
    },
    {
        "id": 864,
        "name": "Southern Leyte"
    },
    {
        "id": 1265,
        "name": "Sultan Kudarat"
    },
    {
        "id": 1566,
        "name": "Sulu"
    },
    {
        "id": 1667,
        "name": "Surigao Del Norte"
    },
    {
        "id": 1668,
        "name": "Surigao Del Sur"
    },
    {
        "id": 369,
        "name": "Tarlac"
    },
    {
        "id": 1570,
        "name": "Tawi-tawi"
    },
    {
        "id": 371,
        "name": "Zambales"
    },
    {
        "id": 972,
        "name": "Zamboanga Del Norte"
    },
    {
        "id": 973,
        "name": "Zamboanga Del Sur"
    },
    {
        "id": 983,
        "name": "Zamboanga Sibugay"
    }
];
// calculate / get shipping fees
const calculateShipping = async (name, courierProvinces, apiKey, secretKey, sender_id, destinationProvince, destinationCity, destinationAddress, sellerProvince) => {
    const isDestinationServiceable = courierProvinces.some((el) => el.name === destinationProvince);
    let shippingRate = null;
    if(isDestinationServiceable) {
        const isSellerServiceable = courierProvinces.some((el) => el.name === sellerProvince);
        if(isSellerServiceable) {
            const province = courierProvinces.find((el) => el.name === destinationProvince);
            try {
                const availableCities = await axios.get(`https://rest.airship.live/v1/provinces/${province.id}`, {
                    headers:
                        {
                            'X-API-KEY': apiKey,
                            'X-SECRET-KEY': secretKey,
                        }
                })
                if (availableCities && availableCities.data.data.length > 0) {
                    const city = availableCities && availableCities.data.data.find((el) => el.name.trim().toLowerCase() === `${destinationCity.toLowerCase()} City` || el.name.trim().toLowerCase() === `${destinationCity.toLowerCase()} city` || el.name.trim().toLowerCase() === destinationCity.toLowerCase())
                    if(city) {
                        // get city package types
                        const availablePackages = await axios.get(`https://rest.airship.live/v1/package_types?city_id=${city.id}`, {
                            headers:
                                {
                                    'X-API-KEY': apiKey,
                                    'X-SECRET-KEY': secretKey,
                                }
                        })
                        if(availablePackages && availablePackages.data.data.length > 0) {
                            const params = {
                                sender_address_id: sender_id,
                                receiver_address: destinationAddress,
                                receiver_city_id: city.id,
                                receiver_province_id: province.id,
                                package_type_id: availablePackages.data.data[2].id
                            }
                            const quotations = await axios.post('https://rest.airship.live/v1/quotations', params, {
                                headers: {
                                    'X-API-KEY': apiKey,
                                    'X-SECRET-KEY': secretKey,
                                }
                            })
                            if (quotations && quotations.data.data) {
                                const rate = {
                                    service_name: name,
                                    service_code: name.toString()
                                        .trim()
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                        .replace(/[^\w\-]+/g, "")
                                        .replace(/\-\-+/g, "-")
                                        .replace(/^-+/, "")
                                        .replace(/-+$/, ""),
                                    description:  name,
                                    currency:     'PHP',
                                    total_price:  quotations.data.data.shipping_fee * 100,
                                    min_delivery_date: "",
                                    max_delivery_date: "",
                                }
                                shippingRate = rate
                                return shippingRate;
                            }
                        }
                    }
                }
            } catch(err) {}
        }
    }
    return shippingRate;
}

router.post('/api/callback', koaBody(), async (ctx, next) => {
    // get request body
    const origin = ctx.request.body.rate.origin
    const destination = ctx.request.body.rate.destination
    const items = ctx.request.body.rate.items
    const sellers = [...new Set(items.map(item => item.vendor))]

    const province = provinces.provinces.find((el) => el.code === destination.province);
    const destinationProvince = province.name;
    const destinationCity = destination.city;
    const destinationAddress = destination.address1

    const rates = [];

    if (items.length >= 2 && sellers.length > 1) { // if multiple seller
        let sellerInfos = [];
        for(let item of items) {
            const filter = {
                product_name: item.name
            }
            const sellerProduct = await axios.get(`https://mvmapi.webkul.com/api/v2/products.json?filter=${JSON.stringify(filter)}`, {
                headers: {
                    'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
                }
            })
            if(sellerProduct.data.products.length > 0) {
                const seller = await axios.get(`https://mvmapi.webkul.com/api/v2/sellers/${sellerProduct.data.products[0].seller_id}.json`, {
                    headers: {
                        'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
                    }
                })
                if (seller && seller.data.seller) {
                    const parsedSeller = JSON.parse(seller.data.seller.custom_fields);
                    const id = seller.data.seller.id;
                    const sellerProvince = Object.values(parsedSeller)[0].value;
                    const sellerCity = seller.data.seller.city;
                    const sellerAddress = seller.data.seller.store_address;
                    const sellerEmail = seller.data.seller.email;
                    const sellerInfo = {
                        id: id,
                        province: sellerProvince,
                        address: sellerAddress,
                        email: sellerEmail,
                        city: sellerCity,
                        sellerIds: {
                            'topdynamics': sellersIds['topdynamics'][seller.data.seller.email] || null,
                        }
                    }
                    sellerInfos.push(sellerInfo)
                }
            }
        }
        const uniqueVendors = sellerInfos.filter((obj, index, self) =>
            index === self.findIndex((el) => (
                el['id'] === obj['id']
            ))
        )
        if(uniqueVendors.length > 0) {
            // top dynamics
            const topDynamicsFees = []
            for (let seller of uniqueVendors) {
                const topdynamicsSenderId = seller.sellerIds['topdynamics'];
                const topdynamicsRate = await calculateShipping('Top Dynamics', topDynamics, topDynamicsKeys.apiKey, topDynamicsKeys.secretKey, topdynamicsSenderId, destinationProvince, destinationCity, destinationAddress, seller.province);
                if (!topdynamicsRate) {
                    isAllowed = false
                    break
                }
                isAllowed = true
                topDynamicsFees.push(topdynamicsRate.total_price)
            }
            if (isAllowed) {
                const tTotalFees = topDynamicsFees.reduce((a, b) => {
                    return a + b;
                });
                rates.push({
                    service_name: 'Top Dynamics',
                    service_code: 'top-dynamics',
                    description:  'Top Dynamics',
                    currency:     'PHP',
                    total_price:  tTotalFees,
                    min_delivery_date: "",
                    max_delivery_date: "",
                })
            }
        }
    } else { // if single seller only
        const filter = {
            product_name: items[0].name
        }
        const sellerProduct = await axios.get(`https://mvmapi.webkul.com/api/v2/products.json?filter=${JSON.stringify(filter)}`, {
            headers: {
                'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
            }
        })
        if (sellerProduct.data.products.length > 0) {
            const seller = await axios.get(`https://mvmapi.webkul.com/api/v2/sellers/${sellerProduct.data.products[0].seller_id}.json`, {
                headers: {
                    'Authorization': 'Bearer OGViOGE0OTc2MzdlMGZmNTFkMDA4YmE0ZjU3NmNkZjk5MzNkMWMzZDQ0YzQxMjY1YTgxMjlhMTQxNmRlMWI2OQ'
                }
            })
            if (seller && seller.data.seller) {
                const parsedSeller   = JSON.parse(seller.data.seller.custom_fields);
                const sellerProvince = Object.values(parsedSeller)[0].value;
                const sellerCity     = seller.data.seller.city;
                const sellerAddress  = seller.data.seller.store_address;
                // top dynamics
                const topdynamicsSenderId = sellersIds['topdynamics'][seller.data.seller.email]
                const topdynamicsRate = await calculateShipping('Top Dynamics', topDynamics, topDynamicsKeys.apiKey, topDynamicsKeys.secretKey, topdynamicsSenderId, destinationProvince, destinationCity, destinationAddress, sellerProvince)
                if(topdynamicsRate) {
                    rates.push(topdynamicsRate)
                }
            }
        }
    }
    // return
    ctx.body = {
        rates: rates
    }
})

module.exports = router
