import { Button } from '@mui/material';

export default function StepFour() {
    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-bold mb-2">Let’s add some services</h2>
            <p className="text-gray-600 mb-6">We’ll help you get set up based on your expertise</p>

            <h3 className="font-semibold mb-3">Select your expertise</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {[
                    "Cybersecurity", "Law", "Content & Branding", "Others", "HR",
                    "Software", "Product", "Study Abroad", "Finance", "Design",
                    "Data", "Astrology", "Mental Health & Wellbeing", "Marketing"
                ].map((item) => (
                    <Button key={item} variant="outlined" className="rounded-full">{item}</Button>
                ))}
            </div>

            <h3 className="font-semibold mb-3">Popular 1:1 services in your expertise</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {[
                    "Quick chat", "Interview prep & tips", "Mock interview", "Resume review",
                    "Career guidance", "1:1 Mentorship", "Discovery Call"
                ].map((item) => (
                    <Button key={item} variant="outlined" className="rounded-full">{item}</Button>
                ))}
            </div>


        </div>
    );
}
