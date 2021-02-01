import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import VendorDialog from '../components/VendorDialog'
import {
    Layout,
    Page,
    Card,
} from '@shopify/polaris'

import axios from 'axios'

export default function Index() {
    const router = useRouter()

    return (
        <Page title="General">
            <Layout>
                <Card title="Top Dynamics Airship BookspinePH Shipping" sectioned>
                    <p>This is BookspinePH custom shipping app for top dynamics</p>
                </Card>
            </Layout>
        </Page>
    )
}
