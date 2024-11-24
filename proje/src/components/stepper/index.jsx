import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import Axios
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3"; // Ensure there are no spaces in the filename
import Step4 from "./step4"; // Ensure there are no spaces in the filename
import { useEffect, useState } from "react";
import auth from "../../lib/auth"

function StepContent({ step, register, errors }) {
    switch (step) {
        case 1:
            return <Step1 register={register} errors={errors} />;
        case 2:
            return <Step2 register={register} errors={errors} />;
        case 3:
            return <Step3 register={register} errors={errors} />;
        case 4:
            return <Step4 register={register} errors={errors} />;
        default:
            return <div>Unknown step</div>;
    }
}

export default function Index() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [currentStep, setCurrentStep] = useState(1);

    const onSubmit = async (data) => {
        //auth.register (data);
        console.log("ok")
    };

    function stepHandler(step) {
        setCurrentStep((s) => s + step);
    }

    // Uncomment for debugging
    // useEffect(() => {
    //     console.log("update", currentStep);
    // }, [currentStep]);

    return (
        <section style={{ paddingTop: '80px' }}>
            <p>Index</p>
            <p>Current Step: {currentStep}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StepContent step={currentStep} register={register} errors={errors} />
                {currentStep > 1 && (
                    <button type="button" onClick={() => stepHandler(-1)} aria-label="Previous Step">Previous</button>
                )}
                {currentStep < 4 ? (
                    <button type="button" onClick={() => stepHandler(1)} aria-label="Next Step">Next</button>
                ) : (
                    <button type="submit" aria-label="Submit">Submit</button>
                )}
            </form>
        </section>
    );
}
