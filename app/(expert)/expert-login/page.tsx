'use client'; // Added for client-side rendering

import { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Box, Button } from '@mui/material';
import Header from '@/components/shared/expert-login/Header'; // Ensure you have this header component
import StepOne from '@/components/shared/expert-login/stepper/StepOne';
import StepTwo from '@/components/shared/expert-login/stepper/StepTwo';
import StepThree from '@/components/shared/expert-login/stepper/StepThree';
// import StepFour from '@/components/shared/expert-login/stepper/StepFour';
import StepFive from '@/components/shared/expert-login/stepper/StepFive';
import ProtectedRoute from '@/components/shared/protected-route/ProtectedRoute'; // Protected Route Component
import { useUser } from '@/context/UserContext'; // Ensure useUser is implemented for managing user context
import { useRouter } from 'next/navigation';

const steps = ['Create Account', 'Set Preferences', 'Choose Services', 'Set Availability & submit'];

// Define the structure of the form data
interface FormData {
    [key: string]: any; // You can define a more specific shape if you know the structure
}

export default function ExpertLoginPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({}); // Explicitly typed as FormData
    const [loading, setLoading] = useState(false);
    const { user } = useUser(); // Access user from context
    const router = useRouter();

    // Add a log for user ID for debugging
    useEffect(() => {
        if (user) {
            console.log('User ID:', user.id); // Log user ID when available
        }
    }, [user]);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            handleFinish(); // Ensure this is triggered when the user is at the last step
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    // Save form data at each step
    const handleSave = (stepData: any) => {
        setFormData((prevData: FormData) => ({ ...prevData, ...stepData })); // Explicit typing for prevData
    };

    const handleFinish = async () => {
        if (!user) {
            console.error('User is not logged in');
            return;
        }

        setLoading(true); // Start loading while sending the request

        try {
            const response = await fetch('/api/expertProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.id, // Send user ID from context
                    expertProfile: formData, // Send expert profile data
                }),
            });

            if (response.ok) {
                router.push('/expert/home')
            } else {
                console.error('Failed to save profile');
            }
        } catch (error) {
            console.error('Error posting profile data', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Render content based on the active step
    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <StepOne onSave={handleSave} />;
            case 1:
                return <StepTwo onSave={handleSave} />;
            case 2:
                return <StepThree onSave={handleSave} />;
            // case 3:
            // // return <StepFour />; // Uncomment if you have StepFour component
            case 3:
                return <StepFive />;
            default:
                return null;
        }
    };

    // Redirect or show Protected Route if the user is not logged in
    if (!user) {
        // return <ProtectedRoute />; // Return a ProtectedRoute component if no user is logged in
    }

    const isFormComplete = () => {
        // Example check: ensure all required fields are filled
        // Adjust the check to match the actual fields you're using in your form
        return Object.keys(formData).length > 0; // or a more detailed check
    };

    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            {/* Header at the top */}
            <div className="flex flex-grow">
                <div className="flex-grow p-6">
                    {/* Main content area */}
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className="mt-8">{renderStepContent(activeStep)}</div>
                </div>
                <div className="w-1/4 bg-gray-200 p-6">
                    {/* Right sidebar */}
                    <p className="text-lg font-bold">Additional Information</p>
                    <p>
                        Helpful guidelines and tips can be provided here to assist users through
                        each step.
                    </p>
                </div>
            </div>
            <Box sx={{ p: 3 }} className="bg-white shadow-md sticky bottom-0">
                {/* Sticky footer */}
                <Box sx={{ p: 3 }} className="bg-white shadow-md sticky bottom-0">
                    {/* Sticky footer */}
                    <Button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        variant="outlined"
                        sx={{ mr: 2 }}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={handleNext}
                        variant="contained"
                        color="primary"
                        disabled={loading || !isFormComplete()}
                    >
                        {activeStep === steps.length - 1 ? (loading ? 'Submitting...' : 'Finish') : 'Next'}
                    </Button>
                </Box>
            </Box>

        </div>
    );
}
