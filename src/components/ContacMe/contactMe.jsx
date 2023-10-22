import SectionTitle from "../SectionTitle/sectionTitle";
import Form from "../Form/form";
import style from './contactMe.module.css';

export default function ContactMe(){
    return(
        <section id={style.contactMe}>
            <SectionTitle title='contact me'/>
            <div id={style.content}>
                <Form />
                <div className={style.extra}>
                    <img src='assets/contactMe.png'></img>
                    <div className={style.result}>
                        <p id={style.goodResult}>
                            Your message was sent, I can’t wait to read it!
                            I’ll try to contact you back as soon as I can :)
                        </p>
                        <p id={style.badResult}>
                         Oh, seems like you wrote an invalid email :/ Please double check if everything is correct and try again.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

