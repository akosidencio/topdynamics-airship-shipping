import {
    Modal,
    Stack,
    ChoiceList,
    FormLayout,
    TextField,
    Select,
    Checkbox,
    Form,
} from '@shopify/polaris'

const options = [
    {label: 'LBC', value: 1},
    {label: 'JRS', value: 2},
]

export default function VendorDialog({ active, vendor, handleChange, handleSelectChange, handleSubmit, handleClose }) {
    return (
        <Modal
            open={active}
            onClose={handleClose}
            title="Add vendor setting"
            primaryAction={{
                content: 'Save',
                onAction: handleSubmit,
            }}
            secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: handleClose,
                },
            ]}
        >
            <Modal.Section>
                <FormLayout>
                    <FormLayout.Group>
                        <TextField type="text" label="Vendor name" name="vendor_name" value={vendor.vendor_name} onChange={(event) => handleChange(event, 'vendor_name')} />
                        <TextField type="email" label="Email" name="email" value={vendor.email} onChange={(event) => handleChange(event, 'email')} />
                    </FormLayout.Group>
                    <FormLayout.Group>
                        <Select
                            label="Courier"
                            name="courier_id"
                            options={options}
                            onChange={(event) => handleSelectChange(event, 'courier_id')}
                            value={vendor.courier_id}
                        />
                    </FormLayout.Group>
                    <FormLayout.Group>
                        <Checkbox
                            label="Express delivery"
                            name="enabled_express_delivery"
                            checked={vendor.enabled_express_delivery}
                            onChange={(event) => handleSelectChange(event, 'enabled_express_delivery')}
                        />
                        <Checkbox
                            label="Standard delivery"
                            name="enabled_standard_delivery"
                            checked={vendor.enabled_standard_delivery}
                            onChange={(event) => handleSelectChange(event, 'enabled_standard_delivery')}
                        />
                    </FormLayout.Group>
                    <FormLayout.Group>
                        <TextField type="number" label="Metro Manila rate" name="shipping_rate_metromanila" value={vendor.shipping_rate_metromanila} onChange={(event) => handleChange(event, 'shipping_rate_metromanila')} />
                        <TextField type="number" label="Luzon rate" name="shipping_rate_luzon" value={vendor.shipping_rate_luzon} onChange={(event) => handleChange(event, 'shipping_rate_luzon')} />
                    </FormLayout.Group>
                    <FormLayout.Group>
                        <TextField type="number" label="Visayas rate" name="shipping_rate_visayas" value={vendor.shipping_rate_visayas} onChange={(event) => handleChange(event, 'shipping_rate_visayas')} />
                        <TextField type="number" label="Mindanao rate" name="shipping_rate_mindanao" value={vendor.shipping_rate_mindanao} onChange={(event) => handleChange(event, 'shipping_rate_mindanao')} />
                    </FormLayout.Group>
                </FormLayout>
            </Modal.Section>
        </Modal>
    )
}