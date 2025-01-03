/*import Styles from "./steps.module.css"

import React, {useEffect, useRef, useState} from "react";*/

/*export default functio    n step3({use_form}) {
    const optionMap = {
        test: ['3', '2', '1'],
        test2: ['v', 'v', 'v']
    }

    const {register, formState: {errors}} = use_form
    const majorSelectRef = useRef('');
    const subMajorSelectRef = useRef('');
    const [isSubMajorEnabled, setIsSubMajorEnabled] = useState(false);
    const handlechangemajor = (e) => {
        majorSelectRef.current = e.target.value;
        subMajorSelectRef.current = '';
        setIsSubMajorEnabled(e.target.value !== '')
    }
    const handlechangesubmajor = (e) => {
        subMajorSelectRef.current = e.target.value;
    }
    useEffect(() => {
        //up <empty string>
        console.log("up", majorSelectRef.current)
    }, [majorSelectRef.current]);
    return (
        <>
            <select onChange={handlechangemajor} {...register("selectbar", {required: true})}
                    className={Styles.customselect}>
                <option value="" disabled selected hidden>انتخاب کنید</option>
                {Object.keys(optionMap).map((majorName, ind) => (
                    <option key={ind} value={majorName}>
                        {majorName}
                    </option>
                ))}
            </select>
            <select
                onChange={handlechangesubmajor}
                className={Styles.customselect}
                {...register("subselectbar", {required: true})}
                disabled={!majorSelectRef.current}
            >
                <option value="" disabled selected hidden>انتخاب کنید</option>
                {majorSelectRef.current && optionMap[majorSelectRef.current].map((item, ind) => (
                    <option key={ind} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    )
}*/
import React, {useState} from "react";
import Styles from './steps.module.css'
import Request from '../request button/RequestButton.jsx'



export default function step3({use_form})
{
    const { register ,formState: { errors }} = use_form;



   return (
        <>
            <input
                type="text"
                placeholder="کد را وارد کنید"
                className={Styles.Inputboxes}
                {...register("verificationcode", { required: true, minLength: 1, maxLength: 6 })}
            />
        <Request/>
        </>

   )


}
