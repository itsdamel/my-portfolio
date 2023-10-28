import { useRef, useState } from 'react';
import emailJs from '@emailjs/browser';
import style from './form.module.css';
import validator from 'validator';
export default function Form({setErrorVisible, setSucessVisible}){
    const form = useRef()
    const email = useRef()

    const sendEmail = (e) =>{
        e.preventDefault();
        let emailAdrress = email.current.value;
        if (validator.isEmail(emailAdrress)){
            emailJs.sendForm('service_k2y3r9p', 'template_3yum136', form.current,'o1Q7wMCDuLlQOp7_K')
            .then(() =>{
                setSucessVisible(true)
            }, () =>{
                setErrorVisible(true)
            }); 
            
        }else{
            setErrorVisible(true)
        }
       
    };
    return(
        <form ref={form} onSubmit={sendEmail} id={style.form}>
            <fieldset> 

                <label for='user_name'>Name</label>

                <input type='text' name='user_name'></input>

                <label  for='user_email'>Email adress</label>

                <input  ref={email} name='user_email' type='text'></input>

            </fieldset>

            <fieldset>

                <label for='message'>Message</label>

                <textarea name='message'></textarea>

                <div className={style.buttonWrapper}><button type='submit' id={style.submitMessage}>Send message</button></div>

            </fieldset>
        </form>
    )
}