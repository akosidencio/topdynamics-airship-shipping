require('isomorphic-fetch')
const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const session = require('koa-session')

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env

app.prepare().then(() => {
    const server = new Koa()
    // const router = new Router();
    const router = require('./api/callback.js')
    server.use(session({ sameSite: 'none', secure: true }, server))
    server.keys = [SHOPIFY_API_SECRET_KEY]

    server.use(
        createShopifyAuth({
            apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_SECRET_KEY,
            scopes: ['write_shipping'],
            async afterAuth(ctx) {
                const { accessToken } = ctx.session
                const urlParams = new URLSearchParams(ctx.request.url)
                const shop = urlParams.get('shop');

                async function registerCarrierService(accessToken) {
                    const data = {
                        carrier_service: {
                            name: 'Top Dynamics Airship BookspinePH Shipping',
                            callback_url: 'https://topdynamics-airship-shipping.herokuapp.com/api/callback',
                            service_discovery: true,
                            format: 'json'
                        }
                    }
                    const response = await axios.post('https://'+ shop + '/admin/api/2021-01/carrier_services.json', data, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Shopify-Access-Token': accessToken
                        }
                    })
                }
                await registerCarrierService(accessToken);
                ctx.redirect(`/?shop=${shop}&token=${accessToken}`)
            },
        }),
    );

    server.use(router.routes())
    server.use(router.allowedMethods())

    server.use(verifyRequest())
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
        ctx.res.statusCode = 200

    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})