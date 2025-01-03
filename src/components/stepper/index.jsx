import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import {useState} from "react";
import auth from "../../lib/auth"
import Styles from "./steps.module.css"

function StepContent({step, use_form, errors}) {
    return [
        <Step1 use_form={use_form} errors={errors}/>,
        <Step2 use_form={use_form} errors={errors}/>,
        <Step3 use_form={use_form} errors={errors}/>,
        <Step4 use_form={use_form} errors={errors}/>,
    ][step - 1]
}


export default function Index() {
    const use_form = useForm({defaultValues: {birthdate: null}});
    const {register, formState: {errors}, handleSubmit} = use_form
    const [currentStep, setCurrentStep] = useState(1);
    const navigate =useNavigate()
    const steps = 3;


    const onError = () => {

    }

    const onSubmit = async (data) => {
        const confirmsubmit = window.confirm("آیا از صحت اطلاعات اطمینان دارید")
        if (confirmsubmit) {
            auth.register (data);
            console.log("ok", JSON.stringify(data, null, 2))
            navigate('/')
        }
        else {
            navigate('/register')
        }

    };

    function stepHandler(step) {
        use_form.trigger().then((isValid) => {
            if (!isValid) {
                console.log('Validation working', errors);
                return;
            }
            if (currentStep < steps)
                setCurrentStep((s) => s + step);
        }).catch((error) => {
            console.error("validation working", error)
        })


    }


    // Uncomment for debugging
    // useEffect(() => {
    //     console.log("update", currentStep);
    // }, [currentStep]);

    return (
        <section style={{
            paddingTop: '100px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "1020px",
                width: "100%",
                gap: "0.625rem 0",
                alignItems: "stretch",
                border: "none",
                boxShadow: "0.7px 0.7px 0.7px 1px rgb(207, 207, 207)",
                borderRadius: "6px",
                paddingBottom: "30px"
            }}>
                <p>ثبت نام</p>
                {/*<p>Current Step: {currentStep}</p>*/}
                <form onSubmit={handleSubmit(onSubmit, onError)}
                      style={{display: "flex", flexDirection: "column", gap: "0.625rem 0", alignItems: "center"}}>
                    <StepContent step={currentStep} use_form={use_form}/>
                    <button
                        type="button"
                        onClick={() => stepHandler(-1)}
                        aria-label="Previous Step"
                        className={Styles.buttons}
                        style={{display: currentStep < 2 ? "none" : "block"}}
                    >
                        قبلی
                    </button>

                    <button
                        type={currentStep < steps ? "button" : "submit"}
                        onClick={() => stepHandler(1)}
                        aria-label="Next Step"
                        className={Styles.buttons}
                    >
                        {currentStep < steps ? "بعدی" : "ثبت نام"}
                    </button>


                </form>
            </div>
        </section>
    );
}
