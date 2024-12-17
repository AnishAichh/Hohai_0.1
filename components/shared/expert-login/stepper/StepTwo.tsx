import { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function StepTwo({ onSave }: { onSave: (data: any) => void }) {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        socialLink: '',
        topmatePage: 'topmate.io/username',
        usagePlan: '',
    });

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onSave({ ...formData, servicesOffered: selectedServices });
    };

    return (
        <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow">
            <TextField
                fullWidth
                label="Connect your social account"
                variant="outlined"
                name="socialLink"
                value={formData.socialLink}
                onChange={handleChange}
                size="small"
            />
            <TextField
                fullWidth
                label="Your topmate page link"
                variant="outlined"
                value={formData.topmatePage}
                name="topmatePage"
                InputProps={{ readOnly: true }}
                size="small"
            />
            <FormControl fullWidth>
                <InputLabel>How do you plan to use topmate</InputLabel>
                <Select
                    name="usagePlan"
                    value={formData.usagePlan}
                    onChange={handleChange}
                    size="small"
                >
                    <MenuItem value="offer">Offer my expertise</MenuItem>
                    <MenuItem value="monetize">Monetize my audience</MenuItem>
                    <MenuItem value="explore">Just exploring</MenuItem>
                </Select>
            </FormControl>

            <div className="flex gap-2 flex-wrap">
                {['1:1 sessions', 'Priority DMs', 'Webinars', 'Packages', 'Digital products'].map(
                    (service) => (
                        <Button
                            key={service}
                            variant={selectedServices.includes(service) ? 'contained' : 'outlined'}
                            onClick={() => toggleService(service)}
                        >
                            {service}
                        </Button>
                    )
                )}
            </div>

            <Button variant="contained" onClick={handleSubmit} fullWidth>
                Save & Continue
            </Button>
        </div>
    );
}
