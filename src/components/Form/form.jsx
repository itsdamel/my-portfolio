import { useRef } from 'react';
import emailJs from '@emailjs/browser';
import style from './form.module.css';
import validator from 'validator';
import {toast} from 'react-toastify';

export default function Form(){
    const form = useRef()
    const email = useRef()
    const message = useRef()
 
    const sendEmail = async (e) => {
        e.preventDefault();
        const emailInput = email.current.value;
        const messageInput = message.current.value
        console.log(!messageInput)
        if (!validator.isEmail(emailInput) || !messageInput) {
          toast.warning("Please double-check to make sure you haven't left any blank or invalid fields.");
          return;
        }
      
        try {
           await toast
           .promise(emailJs.sendForm('service_rv7zd55', 'template_3yum136', form.current, 'o1Q7wMCDuLlQOp7_K'),
            {
                pending: "Trying to send email...",
                success: "Email sent!",
                error: "An error occurred while sending the message. Please try again later :("
            }) 
            
        } catch (error) {
          toast.error("An error occurred while sending the message. Please try again later.");
        }
    };

    return(
        <form ref={form} onSubmit={sendEmail} id={style.form}>
            <fieldset> 

                <label for='user_name'>Name</label>

                <input type='text' name='user_name'></input>

                <label  for='user_email'>Email address</label>

                <input  ref={email} name='user_email' type='text'></input>

            </fieldset>

            <fieldset>

                <label for='message'>Message</label>

                <textarea ref={message} name='message' id='message'></textarea>

                <div className={style.buttonWrapper}><button type='submit' id={style.submitMessage}>Send message</button></div>

            </fieldset>
        </form>
    )
}
