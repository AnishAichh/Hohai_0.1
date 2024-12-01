// components/shared/expert-login/stepper/StepThree.tsx
import { Button } from '@mui/material';

export default function StepThree() {
    return (

        <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow">
            <h2 className="text-2xl font-bold">Let’s add some services</h2>
            <p className="text-sm text-gray-500">We’ll help you get set up based on your expertise</p>

            <div className="flex gap-2 flex-wrap">
                {["Cybersecurity", "Law", "Content & Branding", "Others", "HR", "Software", "Product", "Study Abroad", "Finance", "Design", "Data", "Astrology", "Mental Health & Wellbeing", "Marketing"].map(expertise => (
                    <Button key={expertise} variant="outlined" size="small">{expertise}</Button>
                ))}
            </div>

        </div>
    );
}
