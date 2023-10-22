import style from './form.module.css';

export default function Form(){
    return(
        <form id={style.form}>
            <fieldset> 

                <label for='name'>Name</label>

                <input type='text' name='name'></input>

                <label for='email-adress'>Email adress</label>

                <input name='email-adress' type='text'></input>

            </fieldset>

            <fieldset>

                <label for='message'>Message</label>

                <textarea name='message'></textarea>

                <div className={style.buttonWrapper}><button id={style.submitMessage}>Send message</button></div>

            </fieldset>
        </form>
    )
}