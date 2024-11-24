import s from './login.module.css'
function Login() {
    return (
        <>
            <div className={s.container}>
                <div className={s.contentbox}>
                    <div className={s.contents}>
                        <div className={s.head}>
                            <p className={s.ht}>ورود</p>
                        </div>
                        <div className={s.textboxcon}>
                            <p className={s.t}>نام کاربری</p>
                            <input value="" type="text" placeholder="نام کاریری " className={s.textbox} />
                        </div>

                        <div className={s.textboxcon}>
                            <p className={s.t}>رمز عبور</p>
                            <input value="" type="password" placeholder="رمز عبور" className={s.textbox} />
                        </div>
                        <div className={s.submitb}>
                            <form>
                                <input type="submit" value="ورود" />
                            </form>
                        </div>
                        <hr className={s.spacing} />
                        <div className={s.acontainer}>
                            <a className={s.ta} href=''>فراموشی رمز</a>
                            <br />
                            <a className={s.ta} href=''>ثبت نام</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import s from './YourStyles.module.css'; // Adjust the import based on your file structure

// const LoginForm = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log('Form Data:', data);
//         // Handle login logic here (e.g., API call)
//     };

//     return (
//         <div className={s.container}>
//             <div className={s.contentbox}>
//                 <div className={s.contents}>
//                     <div className={s.head}>
//                         <p className={s.ht}>ورود</p>
//                     </div>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className={s.textboxcon}>
//                             <p className={s.t}>نام کاربری</p>
//                             <input
//                                 type="text"
//                                 placeholder="نام کاربری"
//                                 className={s.textbox}
//                                 {...register('username', { required: 'نام کاربری الزامی است.' })} // Register input with validation
//                             />
//                             {errors.username && <p className={s.error}>{errors.username.message}</p>} {/* Display error message */}
//                         </div>

//                         <div className={s.textboxcon}>
//                             <p className={s.t}>رمز عبور</p>
//                             <input
//                                 type="password"
//                                 placeholder="رمز عبور"
//                                 className={s.textbox}
//                                 {...register('password', { required: 'رمز عبور الزامی است.' })} // Register input with validation
//                             />
//                             {errors.password && <p className={s.error}>{errors.password.message}</p>} {/* Display error message */}
//                         </div>
//                         <div className={s.submitb}>
//                             <input type="submit" value="ورود" />
//                         </div>
//                     </form>
//                     <hr className={s.spacing} />
//                     <div className={s.acontainer}>
//                         <a className={s.ta} href=''>فراموشی رمز</a>
//                         <br />
//                         <a className={s.ta} href=''>ثبت نام</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;

