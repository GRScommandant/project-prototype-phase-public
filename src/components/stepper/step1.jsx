import React, {useState, useRef, useEffect} from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Styles from "./steps.module.css"

export default function Step1({ use_form }) {
    const { register, formState: { errors }, setValue, getValues } = use_form

    const [, setUpdate] = useState(false);
    const [EmployedField , setEmployedField] = useState('')
    const [showCalendar, setShowCalendar] = useState(false);
    const [birthdateError, setBirthdateError] = useState("");
    const employRef = useRef (null)
    const birthdateValue = getValues("birthdate");

    const handleRadioChange = (event) => {
        const value = event.target.value;

        if (value === "yes") {
            employRef.current.style.display = "block";
            setEmployedField(value)
        } else {
            employRef.current.style.display = "none";
            setValue("job", "");
            setEmployedField(!value)
        }
    };

    const handelChangedate = (date) => {
        if (date) {
        setValue("birthdate", (new Date(date)).toLocaleDateString('fa'));
        setUpdate(update => !update)
        setBirthdateError("");
        }
        else {
            setValue("birthdate", "");
            setBirthdateError("وارد کردن تاریخ تولد الزامیست");
        }
    };
    const validateUsername = (value) => {
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        if (specialCharPattern.test(value)) {
            return "نام کاربری نمی‌تواند شامل کاراکترهای ویژه باشد.";
        }
        return true;
    };

    const validatePhonenumber = (e) =>{
            if (e.length > 11) {
                return  "تعداد شماره ها بیش از حد مجاز است"
            }
            return true;
        }



    return (
        <>
            <input
                type="text"
                placeholder=" نام کاربری"
                className={Styles.Inputboxes}
                {...register("Username", { required: true, minLength: 2 , maxLength: 20 , validate:validateUsername })}
            />
            {errors.Username && <span className={Styles.errorsstyle}>{errors.Username.message || "وارد کردن نام کاربری الزامیست"} </span>}
            <input
                type="text"
                placeholder=" نام "
                className={Styles.Inputboxes}
                {...register("Firstname", { required: true, minLength: 2 , maxLength: 40 })}
            />
            {errors.Firstname && <span className={Styles.errorsstyle}>وارد کردن نام الزامیست</span>}

            <input
                type="text"
                placeholder=" نام خانوادگی"
                className={Styles.Inputboxes}
                {...register("Lastname", { required: true, minLength: 2 , maxLength: 40 })}
            />
            {errors.Username && <span className={Styles.errorsstyle}>وارد کردن نام خانوادگی الزامیست</span>}

            <input
                type="email"
                placeholder="ایمیل"
                className={Styles.Inputboxes}
                {...register("email", { required: true, minLength: 5, maxLength: 80 })}
            />
            {errors.email && <span className={Styles.errorsstyle}>وارد کردن ایمیل الزامیست</span>}
            <input
                type="tel"
                placeholder="شماره موبایل"
                className={Styles.Inputboxes}
                {...register("phonenumber", { required: true , minLength: 6, maxLength: 11 , validate:validatePhonenumber })}

            />
            {errors.phonenumber && <span className={Styles.errorsstyle}>{errors.phonenumber.message || "وارد کردن شماره موبایل الزامیست"}</span>}
            <label>
                آیا شاغل هستید؟
                {<input
                    type="radio"
                    value="yes"
                    onClick={handleRadioChange}
                    {...register("radio", { required: true })} />}
                بله
                <input
                    type="radio"
                    value="no"
                    onClick={handleRadioChange}
                    {...register("radio", { required: true })}/>
                خیر
                {errors.radio && <span className={Styles.errorsstyle}>  یکی از گزینه ها را انتخاب کنید</span>}
            </label>
            <div
                ref={employRef}
                style={{ display: 'none' , width:"100%" }}>
            <input
                type="text"
                placeholder="شغل خود را وارد کنید "
                className={Styles.Inputboxes}
                {...register("job", { required: EmployedField, minLength: 2, maxLength: 40 })}
            />
                {errors.job && <span className={Styles.errorsstyle}>وارد کردن شغل الزامیست</span>}
            </div>
            <label>
                مقطع تحصیلی
            </label>
                    <select className={Styles.customselect} {...register("option", { required: true })} >
                    <option value="" disabled selected hidden className={Styles.options}>انتخاب کنید</option>
                    <option value="دبیرستان دوره اول" className={Styles.options}>دبیرستان دوره اول</option>
                    <option value="دبیرستان دوره دوم"className={Styles.options}>دبیرستان دوره دوم</option>
                    <option value="دبستان" className={Styles.options}>دبستان</option>
                    <option value="پیش دانشگاه" className={Styles.options}>پیش دانشگاه</option>
                </select>

            {errors.option && <span className={Styles.errorsstyle}>یک مورد را انتخاب کنید</span>}

            <div>

                <button type="button" onClick={() => setShowCalendar(p => !p)} className={Styles.buttons}  >انتخاب تاریخ</button>
                {showCalendar ? <Calendar calendar={persian} locale={persian_fa} onChange={handelChangedate}  /> : null}

                <input
                    type="hidden"
                    {...register("birthdate", { required: true })}
                />
                {birthdateError && <span className={Styles.errorsstyle}>{birthdateError}</span>}

            </div>
            <input type="text" value={birthdateValue} disabled placeholder="تاریخ تولد" className={Styles.dateshow} />

        </>
    );
}
