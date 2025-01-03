import Styles from "./steps.module.css"
import React, {useRef, useState} from "react";


export default function step2({use_form}) {

    const {register, formState: {errors}, setValue} = use_form
    const majorselectRef = useRef(null);
    const [isMultipleMajors, setIsMultipleMajors] = useState(false);
    const majorRef = useRef(null);
    const major = ['ورزش', 'ادبیات', 'فنی حرفه ای', 'حقوق', 'کامپیوتر', 'ریاضی', 'تجربی']
    const highmajor = [
        "علوم تجربی",
        "ریاضی فیزیک",
        "علوم انسانی",
        "زبان‌های خارجی",
        "کامپیوتر",
        "الکترونیک",
        "مکانیک",
        "ساختمان",
        "هنرهای تجسمی",
        "حسابداری",
        "بهداشت و درمان"
    ];
    const [Error, SetError] = useState();
    const handleFloatChange = (event) => {

        const value = event.target.value;
        if (value === '' || /^-?\d+(\.\d+)?$/.test(value)) {
            setValue("floatValue", value);
        } else {
            SetError('')
        }
    };
    const handlemajorChange = (event) => {
        const isChecked = (event.target.checked)
        setIsMultipleMajors(isChecked);
        if (isChecked) {
            majorRef.current.style.display = "block";

        } else {
            majorRef.current.style.display = "none";
            setValue("major", "");
        }
    }


    return (
        <>
            <input
                type="text"
                placeholder="معدل کل"
                className={Styles.Inputboxes}
                onChange={handleFloatChange}
                {...register("floatValue", {required: true , minLength:1 , maxLength:5})}
            />
            {errors.floatValue && <span className={Styles.errorsstyle}>لطفا یک عدد اعشاری معتبر وارد کنید</span>}
            <label>رشته ی مورد پسند</label>
            <select  className={Styles.customselect} ref={majorselectRef} {...register("selectbar", {required: true})}>
                <option value="" disabled selected hidden>انتخاب کنید</option>
                {major.map((item, ind) => (
                    <option key={ind} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            {errors.selectbar && <span className={Styles.errorsstyle}>رشته ی مورد علاقه خود را انتخاب کنید</span>}
            <label>
            چندین رشته را می پسندم
            <input type="checkbox" onClick={handlemajorChange} value="he likes multipe majors" />
            </label>

            <div ref={majorRef} style={{ display: "none" }}>

            <textarea
                rows="4"
                cols="50"
                placeholder="رشته های مورد پسند"
                className={Styles.Inputboxes}
                {...register("major", {required: isMultipleMajors, minLength:2 , maxLength: 60})}
            />
            {errors.major && <span className={Styles.errorsstyle}>رشته ی مورد علاقه خود را انتخاب کنید</span>}
            </div>
            <label>رشته دبیرستان</label>
            <select {...register("selectbar2", {required: true})} className={Styles.customselect}>
                <option value="" disabled selected hidden>انتخاب کنید</option>
                {highmajor.map((item, ind) => (
                    <option key={ind} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            {errors.selectbar2 && <span className={Styles.errorsstyle}>لطفا رشته ی دبیرستان را وارد کنید</span>}
        </>
    )
}
