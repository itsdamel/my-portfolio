
import SectionTitle from "../SectionTitle/sectionTitle";
import Form from "../Form/form";
import style from './contactMe.module.css';

export default function ContactMe(){
    
    return(
        <section id="contact" className={style.contactMe}>
            <SectionTitle title='contact me'/>
            <div id={style.content}>
                <Form />
                <div className={style.extra}>

                    <img src='assets/contactMe.png'></img>
                     
                </div>

            </div>
        </section>
    )
}

