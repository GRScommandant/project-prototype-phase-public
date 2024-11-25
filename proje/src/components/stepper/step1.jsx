import React, { useEffect, useState } from "react";
//import { useForm } from 'react-hook-form';
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Step1({ use_form }) {
    const { register, formState: { errors }, setValue, getValues } = use_form

    const [, setUpdate] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const birthdateValue = getValues("birthdate");


    const handelChangedate = (date) => {
        setValue("birthdate", (new Date(date)).toLocaleDateString('fa'));
        setUpdate(update => !update) // Update the birthdate value
    };



    return (
        <>
            <input type="text" placeholder="نام" {...register("firstname", { required: true, maxLength: 40 })} />
            {errors.firstname && <span>وارد کردن نام الزامیست</span>}
            <input type="text" placeholder=" نام خانوادگی" {...register("lastname", { required: true, maxLength: 40 })} />
            {errors.lastname && <span>وارد کردن نام خانوادگی الزامیست</span>}
            <input type="email" placeholder="ایمیل" {...register("email", { required: true, minLength: 5, maxLength: 80 })} />
            {errors.email && <span>وارد کردن ایمیل الزامیست</span>}
            <input type="tel" placeholder="شماره موبایل" {...register("phonenumber", { required: true, minLength: 6, maxLength: 12 })} />
            {errors.phonenumber && <span>وارد کردن شماره موبایل الزامیست</span>}
            <label>
                <input type="radio" value="yes" {...register("radio", { required: true })} />
                بله
                <input type="radio" value="no" {...register("radio", { required: true })} />
                خیر
                {errors.radio && <span>یکی از گزینه ها را انتخاب کنید</span>}
            </label>
            <select {...register("option", { required: true })}>
                <option value="">انتخاب کنید</option>
                <option value="دبیرستان دوره اول">دبیرستان دوره اول</option>
                <option value="دبیرستان دوره دوم">دبیرستان دوره دوم</option>
                <option value="دبستان">دبستان</option>
                <option value="پیش دانشگاه">پیش دانشگاه</option>
            </select>
            {errors.option && <span>یک مورد را انتخاب کنید</span>}
            <div>
                <button type="button" onClick={() => setShowCalendar(p => !p)}>تاریخ تولد</button>
                <p>{birthdateValue}</p> {/* Render the formatted date */}
                {showCalendar ? <Calendar calendar={persian} locale={persian_fa} onChange={handelChangedate} /> : null}
            </div>
        </>
    );
}
