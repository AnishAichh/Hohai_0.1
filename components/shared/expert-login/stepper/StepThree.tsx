import { useState } from 'react';
import { Button } from '@mui/material';

export default function StepThree({ onSave }: { onSave: (data: any) => void }) {
    const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

    const toggleExpertise = (expertise: string) => {
        setSelectedExpertise((prev) =>
            prev.includes(expertise) ? prev.filter((e) => e !== expertise) : [...prev, expertise]
        );
    };

    const handleSubmit = () => {
        onSave({ expertise: selectedExpertise });
    };

    return (
        <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow">
            <h2 className="text-2xl font-bold">Select your expertise</h2>

            <div className="flex gap-2 flex-wrap">
                {[
                    'Cybersecurity',
                    'Law',
                    'Content & Branding',
                    'Others',
                    'HR',
                    'Software',
                    'Product',
                    'Study Abroad',
                    'Finance',
                    'Design',
                    'Data',
                    'Astrology',
                    'Mental Health & Wellbeing',
                    'Marketing',
                ].map((expertise) => (
                    <Button
                        key={expertise}
                        variant={selectedExpertise.includes(expertise) ? 'contained' : 'outlined'}
                        onClick={() => toggleExpertise(expertise)}
                    >
                        {expertise}
                    </Button>
                ))}
            </div>

            <Button variant="contained" onClick={handleSubmit} fullWidth>
                Save & Continue
            </Button>
        </div>
    );
}
