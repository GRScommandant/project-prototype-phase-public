import s from './login.module.css'
function Login () {
return(
<>
    <div className={s.container}>
            <div className={s.contentbox}>
                <div className={s.contents}>
                    <div className={s.head}>
                        <p className={s.ht}>ورود</p>
                    </div>
                    <div className={s.textboxcon}>
                        <p className={s.t}>نام کاربری</p> 
                        <input type="text" className={s.textbox}/>
                    </div>

                    <div className={s.textboxcon}>
                        <p className={s.t}>رمز عبور</p> 
                        <input type="password" className={s.textbox}/>
                    </div>
                    <div className={s.submitb}>
                        <input type="submit" value="ورود" className={s.submitbutton}/>
                    </div>
                    <hr className={s.spacing}/>
                    <div className={s.acontainer}>
                        <a className={s.ta} href=''>فراموشی رمز</a>
                        <br/>
                        <a className={s.ta} href=''>ثبت نام</a>
                    </div>
                </div>  
            </div>
        </div>
</>
)
}
export default Login
        