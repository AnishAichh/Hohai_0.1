// pages/expert-login/page.tsx
'use client';
import { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Button } from '@mui/material';
import Header from '@/components/shared/expert-login/Header'; // Ensure you have this header component created
import StepOne from '@/components/shared/expert-login/stepper/StepOne';
import StepTwo from '@/components/shared/expert-login/stepper/StepTwo';
import StepThree from '@/components/shared/expert-login/stepper/StepThree';
import StepFour from '@/components/shared/expert-login/stepper/StepFour';
import StepFive from '@/components/shared/expert-login/stepper/StepFive';

const steps = ['Create Account', 'Set Preferences', 'Choose Services', 'Set Availability', 'Review & Submit'];

export default function ExpertLoginPage() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <StepOne />;
            case 1:
                return <StepTwo />;
            case 2:
                return <StepThree />;
            case 3:
                return <StepFour />;
            case 4:
                return <StepFive />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Header at the top */}
            <div className="flex flex-grow">

                <div className="flex-grow p-6">  {/* Main content area */}
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className="mt-8">{renderStepContent(activeStep)}</div>
                </div>
                <div className="w-1/4 bg-gray-200 p-6">  {/* Right sidebar */}
                    <p className="text-lg">Additional Information</p>
                    <p>Helpful guidelines and tips can be provided here to assist users through each step.</p>
                </div>
            </div>
            <Box sx={{ p: 3 }} className="bg-white shadow-md sticky bottom-0">  {/* Sticky footer */}
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
                    disabled={activeStep === steps.length - 1}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </div>
    );
}
