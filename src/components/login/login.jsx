 import React from 'react';
 import { useForm } from 'react-hook-form';
 import s from './login.module.css';
 import Styles from "../stepper/steps.module.css"; // Adjust the import based on your file structure

 const LoginForm = () => {
     const { register, handleSubmit, formState: { errors } } = useForm();

     const onSubmit = (data) => {
         console.log('Form Data:', data);
         // Handle login logic here (e.g., API call)
     };

     return (
         <div className={s.container}>
             <div className={s.contentbox}>
                 <div className={s.contents}>
                     <div className={s.head}>
                         <p className={s.ht}>ورود</p>
                     </div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                         <div className={s.textboxcon}>
                             <p className={s.t}>نام کاربری</p>
                             <input
                                 type="text"
                                 placeholder="نام کاربری"
                                 className={s.textbox}
                                 {...register('username', { required: 'true' })}

                             />
                             {errors.username && <span className={Styles.errorsstyle}>وارد کردن نام کاربری الزامیست</span>}
                         </div>

                         <div className={s.textboxcon}>
                             <p className={s.t}>رمز عبور</p>
                             <input
                                type="password"
                                 placeholder="رمز عبور"
                                 className={s.textbox}
                                 {...register('password', { required: 'رمز عبور الزامی است.' })} // Register input with validation
                             />
                             {errors.username && <span className={Styles.errorsstyle}>وارد کردن رمز الزامیست</span>}
                         </div>
                         <div className={s.submitb}>
                             <button type="submit" className={s.subbtn}>ورود</button>
                         </div>
                     </form>
                     <hr className={s.spacing} />
                     <div className={s.acontainer}>
                         <a className={s.ta} href=''>فراموشی رمز</a>
                         <a className={s.ta} href=''>ثبت نام</a>
                     </div>
                </div>
           </div>
         </div>
     );
 };

 export default LoginForm;


