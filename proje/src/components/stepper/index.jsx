import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import Axios
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3"; // Ensure there are no spaces in the filename
import Step4 from "./step4"; // Ensure there are no spaces in the filename
import { useEffect, useState } from "react";
import auth from "../../lib/auth"
import { Flex } from '@radix-ui/themes';

function StepContent({ step, use_form}) {
    switch (step) {
        case 1:
            return <Step1 use_form={use_form}  />;
        case 2:
            return <Step2 use_form={use_form} />;
        case 3:
            return <Step3 use_form={use_form} />;
        case 4:
            return <Step4 use_form={use_form} />;
        default:
            return <div>Unknown step</div>;
    }
}

export default function Index() {
    const use_form = useForm({ defaultValues: { birthdate: null } });
    const { register, formState: { errors }, handleSubmit } = use_form
    const [currentStep, setCurrentStep] = useState(1);

    const onSubmit = async (data) => {
        //auth.register (data);
        console.log("ok" , JSON.stringify(data , null , 2))
    };

    function stepHandler(step) {
        setCurrentStep((s) => s + step);
    }

    // Uncomment for debugging
    // useEffect(() => {
    //     console.log("update", currentStep);
    // }, [currentStep]);

    return (
        <section style={{ paddingTop: '80px', display:"flex", flexDirection:"column" , alignItems:"center"}}>
            <p>Index</p>
            <p>Current Step: {currentStep}</p>
            <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:"column" , maxWidth:"60vw" , minWidth:"50vw" , gap:"0.625rem 0" }}>
                <StepContent step={currentStep} use_form={use_form}/>
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
